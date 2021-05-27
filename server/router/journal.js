const db = require("../models");
const router = require("express").Router();
const { wrapper, CustomError, FormError } = require("./error");

exports.showJournal = router.get(
  "showJournal/:student_id/:date",
  wrapper(async (req, res) => {
    const { student_id, date } = req.params;
    const journal = await db.Journal.findOne({
      where: {
        student_id,
        date,
      },
    });
    res.json(journal);
  })
);

exports.showMainEmo = router.get(
  "showJournal/:student_id/:date",
  wrapper(async (req, res) => {
    const { student_id, date } = req.params;
    const journal = await db.Journal.findOne({
      where: {
        student_id,
        date,
      },
    });
    res.json(journal.main_emotion);
  })
);

exports.addComment = router.post(
  "/addComment",
  wrapper(async (req, res) => {
    const { idx, comment } = req.body;
    const journal = await db.Journal.update({
      comment,
      where: {
        idx,
      },
    });
    res.json(journal.comment);
  })
);
exports.addJournal = router.post(
  "/addJournal",
  wrapper(async (req, res) => {
    const { student_id, teacher_id, contents } = req.body;
    try {
      await db.Journal.create({
        student_id,
        teacher_id,
        contents,
        date: new Date(),
      });
      req.status(200);
    } catch (e) {
      throw e;
    }
  })
);

exports.updateJournal = router.post(
  "/updateJournal",
  wrapper(async (req, res) => {
    const { idx, contents } = req.body;
    const journal = await db.Journal.update({
      contents,
      where: {
        idx,
      },
    });
    res.json(journal);
  })
);
