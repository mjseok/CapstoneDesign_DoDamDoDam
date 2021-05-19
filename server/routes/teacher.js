const express = require("express");
const router = express.Router();
const {
  selectJournalTeacher,
  showAllStudent,
  writeComment,
  showStudent,
  addStudent,
  deleteStudent,
  updateStudent,
} = require("../controller/teacherController");

// router.get('/show/journal', selectJournalTeacher);
router.get("/:class", showAllStudent);
router.post("/add/comment", writeComment);
router.get("/show/studentInfo", showStudent);
router.post("/add/student", addStudent);
router.delete("/delete/student", deleteStudent);
router.patch("/update/student", updateStudent);

module.exports = router;
