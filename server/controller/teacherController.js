const db = require("../models");

const {
  selectJournalTeacher,
  insertComment,
  selectAllStudent,
  selectStudent,
  insertStudent,
  deleteStudent,
  updateStudent,
} = require("../dbquery/teacherQuery");

exports.showJournalByteacher = async (req, res) => {
  try {
    const student_id = req.body.studentID;
    const date = new Date();
    const journal = await db.query(selectJournalTeacher, [student_id, date]);
    res.json(journal);
  } catch (err) {
    throw err;
  }
};
exports.writeComment = async (req, res) => {
  try {
    const student_id = req.body.studentID;
    const date = new Date();
    const comment = await db.query(insertComment, [student_id, date]);
    res.json(comment);
  } catch (err) {
    throw err;
  }
};
exports.showAllStudent = async (req, res) => {
  try {
    const teacher_id = req.body.teacherID;

    const allStudent = await db.query(selectAllStudent, [teacher_id]);
    res.json(allStudent[0]);
  } catch (err) {
    throw err;
  }
};
exports.showStudent = async (req, res) => {
  try {
    const student_id = req.body.studentID;
    const student = await db.query(selectStudent, [student_id]);
    res.json(student);
  } catch (err) {
    throw err;
  }
};
exports.addStudent = async (req, res) => {
  try {
    const student_id = req.body.studentID;
    const password = req.body.password;
    const teacher_id = req.body.teacherID;
    const number = req.body.number;
    const birth = req.body.birth;
    const photo = req.body.photo;
    const newStudent = await db.query(insertStudent, [
      student_id,
      password,
      teacher_id,
      number,
      birth,
      photo,
    ]);
    res.json(newStudent);
  } catch (err) {
    throw err;
  }
};
exports.deleteStudent = async (req, res) => {
  try {
    const student_id = req.body.studentID;
    const deletedStudent = await db.query(deleteStudent, [student_id]);
    res.json(deletedStudent);
  } catch (err) {
    throw err;
  }
};
exports.updateStudent = async (req, res) => {
  try {
    const teacher_id = req.body.teacherID;
    const number = req.body.number;
    const birth = req.body.birth;
    const photo = req.body.photo;
    const student_id = req.body.studentID;
    const student = await db.query(updateStudent, [
      teacher_id,
      number,
      birth,
      photo,
      student_id,
    ]);
    res.json(student);
  } catch (err) {
    throw err;
  }
};
