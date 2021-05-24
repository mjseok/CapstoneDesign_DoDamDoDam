const hanspell = require("hanspell");
const db = require("../models");
const router = require("express").Router();
const { wrapper, CustomError, FormError } = require("./error");
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
