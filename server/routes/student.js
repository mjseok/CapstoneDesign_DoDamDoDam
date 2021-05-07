const express = require("express");
const router = express.Router();
const { showAllWord } = require("../controller/studentController");
router.get("/show", showAllWord);
