const db = require("../models");
const router = require("express").Router();
const { wrapper, CustomError, FormError } = require("./error");

exports.showJournal = router.get(
  "/showJournal/:student_id/:date",
  wrapper(async (req, res) => {
    const { student_id, date } = req.params;
    console.log(date);
    const journal = await db.Journal.findOne({
      where: {
        student_id,
        date,
      },
    });
    res.json(journal);
  })
);

exports.showAllMainEmo = router.get(
  "/showMainEmo/:student_id",
  wrapper(async (req, res) => {
    const { student_id } = req.params;
    const result = await db.Journal.findAll({
      attributes: ["date", "main_emotion"],
      where: {
        student_id,
      },
    });
    res.json(result);
  })
);

exports.addComment = router.patch(
  "/addComment",
  wrapper(async (req, res) => {
    const { idx, comment } = req.body;
    await db.Journal.update(
      { comment },
      {
        where: {
          idx: idx,
        },
      }
    );
  })
);
exports.addJournal = router.post(
  "/addJournal",
  wrapper(async (req, res) => {
    const { student_id, teacher_id, content } = req.body;
    try {
      await db.Journal.create({
        student_id,
        teacher_id,
        content,
        date: new Date(),
      });
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
