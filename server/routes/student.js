<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const { showAllWord, writeJournal, enterEmotion, mainEmotion, comment, checkMainEmotion, checkJournal } = require('../controller/studentController');

router.get('/show/word', showAllWord);
router.post('/add/journal', writeJournal);
router.post('/add/emotion', enterEmotion);
router.post('/add/mainEmotion', mainEmotion);
router.get('/show/comment', comment);
router.get('/show/mainEmotion', checkMainEmotion);
router.get('/show/journal', checkJournal);
=======
const express = require("express");
const router = express.Router();
const { showAllWord, writeJournal, enterEmotion, mainEmotion, comment, checkMainEmotion, checkJournal } = require("../controller/studentController");

router.get("/show/word", showAllWord);
router.post("/add/journal", writeJournal);
router.post("/add/emotion", enterEmotion);
router.post("/add/mainEmotion", mainEmotion);
router.get("/show/comment", comment);
router.get("/show/mainEmotion", checkMainEmotion);
router.get("/show/journal", checkJournal);
>>>>>>> 8971299c1d308af2bcebe2b46fcfb2c4e175dd03

module.exports = router;
