const db = require("../models");
const router = require("express").Router();
const { wrapper, CustomError, FormError } = require("./error");

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
