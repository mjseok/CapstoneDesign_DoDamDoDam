const db = require("../DB/config");
const {
  selectAllWord,
  insertJournal,
  insertEmotion,
  insertMainEmotion,
  selectComment,
  selectMainEmotion,
  selectJournal,
} = require("../dbquery/studentQuery");
exports.showAllWord = async (req, res) => {
  try {
    const teacher_id = req.body.teacherID;
    const allWord = await db.query(selectAllWord, [teacher_id]);
    res.json(allWord);
  } catch (err) {
    throw err;
  }
};
exports.writeJournal = async (req, res) => {
  try {
    const teacher_id = req.body.teacherID;
    const student_id = req.body.studentID;
    const date = new Date();
    const contents = req.body.contents;
    const journal = await db.query(insertJournal, [
      student_id,
      teacher_id,
      date,
      contents,
    ]);
    res.json(journal);
  } catch (err) {
    throw err;
  }
};
exports.enterEmotion = async (req, res) => {
  try {
    const happy = req.body.happy;
    const neutral = req.body.neutral;
    const fear = req.body.fear;
    const anger = req.body.anger;
    const sadness = req.body.sadness;

    const emotion = await db.query(insertEmotion, [
      happy,
      neutral,
      fear,
      anger,
      sadness,
    ]);
    res.json(emotion);
  } catch (err) {
    throw err;
  }
};
exports.mainEmotion = async (req, res) => {
  try {
    const mainEmo = req.body.mainEmotion;
    const mainEmotion = await db.query(insertMainEmotion, [mainEmo]);
    res.json(mainEmotion);
  } catch (err) {
    throw err;
  }
};
exports.comment = async (req, res) => {
  try {
    const comment = await db.query(selectComment);
    res.json(comment);
  } catch (err) {
    throw err;
  }
};
exports.checkMainEmotion = async (req, res) => {
  try {
    const selectmainemotion = await db.query(selectMainEmotion);
    res.json(selectmainemotion);
  } catch (err) {
    throw err;
  }
};
exports.checkJournal = async (req, res) => {
  try {
    const selectjournal = await db.query(selectJournal);
    res.json(selectjournal);
  } catch (err) {
    throw err;
  }
};
