const db = require("../models");
const router = require("express").Router();
const { wrapper, CustomError, FormError } = require("./error");
const { check, validationResult } = require("express-validator");

exports.login = router.post(
  "/login",
  [check("id").exists({ checkFalsy: true }).withMessage("아이디를 입력해주세요."), check("password").exists({ checkFalsy: true }).withMessage("패스워드를 입력해주세요.")],
  wrapper(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) throw new FormError(errors.mapped());
    const { id, password } = req.body;

    const teacher = await db.Teacher.findOne({
      where: { id },
    });

    const teachers = await db.Teacher.findAll();
    console.log(444, teacher, teachers);
    if (teacher && teacher.dataValues.id === id && teacher.dataValues.password === password) {
      req.session.userId = id;
      req.session.userType = "teacher";
      return res.status(200).json({ ...teacher.dataValues, userType: "teacher" });
    }
    if (teacher && teacher.dataValues.id === id && teacher.dataValues.password !== password) {
      throw new CustomError({
        code: 400,
        message: "아이디와 비밀번호를 확인해주세요.",
      });
    }

    const student = await db.Student.findOne({
      where: { id },
    });
    if (student && student.dataValues.id === id && student.dataValues.password === password) {
      req.session.userId = id;
      req.session.userType = "student";
      return res.status(200).json({ ...student.dataValues, userType: "student" });
    }
    if (student && student.dataValues.id === id && student.dataValues.password !== password) {
      throw new CustomError({
        code: 400,
        message: "아이디와 비밀번호를 확인해주세요.",
      });
    }

    if (!teacher && !student)
      throw new CustomError({
        code: 404,
        message: "가입되지 않은 회원입니다.",
      });
  })
);

exports.logout = router.delete(
  "/logout",
  wrapper(async (req, res) => {
    req.session.destroy(function (err) {
      if (err) {
        console.log(err);
      } else {
        res.sendStatus(200);
      }
    });
  })
);

exports.postTeacher = router.post(
  "/join/teacher",
  [
    check("id").exists({ checkFalsy: true }).withMessage("아이디를 입력해주세요."),
    check("password").exists({ checkFalsy: true }).withMessage("패스워드를 입력해주세요."),
    check("name").exists().withMessage("이름을 입력해주세요."),
    check("school").exists().withMessage("학교 이름을 입력해주세요."),
    check("grade").exists().withMessage("학년을 입력해주세요.").isInt().withMessage("학년은 숫자만 입력해주세요."),
    check("class").exists().withMessage("반을 입력해주세요.").isInt().withMessage("반은 숫자만 입력해주세요."),
  ],
  wrapper(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) throw new FormError(errors.mapped());
    const data = req.body;
    console.log(data);

    try {
      await db.Teacher.create(data);
      req.session.userId = data.id;
      req.session.userType = "teacher";
      res.status(201).json(data);
    } catch (e) {
      if (e.errors[0].type === "unique violation") throw new CustomError({ code: 409, message: "이미 가입되었습니다." });
    }
  })
);

exports.postStudent = router.post(
  "/join/student",
  [
    check("id").exists({ checkFalsy: true }).withMessage("아이디를 입력해주세요."),
    check("password").exists({ checkFalsy: true }).withMessage("패스워드를 입력해주세요."),
    check("name").exists().withMessage("이름을 입력해주세요."),
    check("school").exists().withMessage("학교 이름을 입력해주세요."),
    check("grade").exists().withMessage("학년을 입력해주세요."),
    check("class").exists().withMessage("반을 입력해주세요."),
  ],
  wrapper(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) throw new FormError(errors.mapped());
    const data = req.body;

    try {
      await db.Student.create(data);
      req.session.userId = data.id;
      req.session.userType = "student";
      res.status(201).json(data);
    } catch (e) {
      if (e.errors[0].type === "unique violation") throw new CustomError({ code: 409, message: "이미 가입되었습니다." });
    }
  })
);
