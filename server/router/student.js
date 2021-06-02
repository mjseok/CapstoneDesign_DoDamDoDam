const db = require("../models");
const router = require("express").Router();
const { wrapper, CustomError, FormError } = require("./error");
<<<<<<< HEAD
=======
const hanspell = require("hanspell");
const { isEmpty } = require("lodash");

exports.studentSpellCheck = router.get(
  "/student/spell",
  wrapper(async (req, res) => {
    try {
      const text = req.query.text;
      const corrected = await new Promise((resolve, reject) => {
        let checkedSpell;
        const getResult = function (result) {
          checkedSpell = result;
        };
        const end = function () {
          resolve(checkedSpell);
        };
        const error = function (err) {
          console.error("spell check error: " + err);
          resolve(checkedSpell);
        };
        hanspell.spellCheckByPNU(text, 6000, getResult, end, error);
      });
      res.status(200).send(corrected);
    } catch (err) {
      console.error(err);
      throw new CustomError({ code: 500, message: "맞춤법 검사에 오류가 발생했습니다." });
    }
  })
);
>>>>>>> 8971299c1d308af2bcebe2b46fcfb2c4e175dd03

exports.showStudents = router.get(
  "/showAll/:teacher_id",
  wrapper(async (req, res) => {
    const { teacher_id } = req.params;
    const students = await db.Student.findAll({
      where: {
        teacher_id,
      },
    });
    res.json(students);
  })
);
<<<<<<< HEAD
=======

>>>>>>> 8971299c1d308af2bcebe2b46fcfb2c4e175dd03
exports.showStudent = router.get(
  "/show/:id",
  wrapper(async (req, res) => {
    const { id } = req.params;
    const student = await db.Student.findOne({
      where: {
        id,
      },
    });
    res.json(student);
  })
);

exports.updateStudent = router.post(
  "/updateStudent",
  wrapper(async (req, res) => {
    const { id, password, name, number, birthday, photo } = req.body;
    const studentInfo = await db.Student.update({
      password,
      name,
      number,
      birthday,
      photo,
      where: {
        id,
      },
    });
  })
);

exports.deleteStudent = router.delete(
  "/deleteStudent/:id",
  wrapper(async (req, res) => {
    const { id } = req.params;
    await db.Student.destroy({
      where: {
        id,
      },
    });
  })
);

exports.addStudent = router.post(
  "/addStudent",
  wrapper(async (req, res) => {
<<<<<<< HEAD
    const { id, password, teacher_id, name, number, birthday, photo } =
      req.body;
=======
    const { id, password, teacher_id, name, number, birthday, photo } = req.body;
>>>>>>> 8971299c1d308af2bcebe2b46fcfb2c4e175dd03
    await db.Student.create({
      id,
      password,
      teacher_id,
      name,
      number,
      birthday,
      photo,
    });
  })
);
