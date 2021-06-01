const db = require("../models");
const router = require("express").Router();
const { wrapper, CustomError, FormError } = require("./error");

exports.showStudents = router.get(
  "/showAll/:teacher_id",
  wrapper(async (req, res) => {
    const { teacher_id } = req.params;
    console.log(teacher_id);
    const students = await db.Student.findAll({
      where: {
        teacher_id,
      },
    });
    res.json(students);
  })
);
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
    const { id, password, teacher_id, name, number, birthday, photo } =
      req.body;
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
