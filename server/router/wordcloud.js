const db = require("../models");
const router = require("express").Router();
const { wrapper, CustomError, FormError } = require("./error");

exports.showWords = router.get(
  "/showWords/:teacher_id",
  wrapper(async (req, res) => {
    const { teacher_id } = req.params;

    try {
      const words = await db.WordCloud.findAll({
        where: {
          teacher_id,
        },
      });
      res.json(words);
    } catch (e) {
      console.error(e);
      res.error("에러 발생");
    }
  })
);
