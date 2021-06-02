const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const { handleErrors } = require("./router/error");
const session = require("express-session");
const { sequelize } = require("./models");
const { getUserMe } = require("./router/user");
const { login, postTeacher, postStudent, logout } = require("./router/auth");
<<<<<<< HEAD
const {
  showJournal,
  showMainEmo,
  addComment,
  addJournal,
  updateJournal,
} = require("./router/journal");
const {
  showStudents,
  showStudent,
  updateStudent,
  deleteStudent,
} = require("./router/student");
=======
const { showJournal, showMainEmo, addComment, addJournal, updateJournal } = require("./router/journal");
const { showStudents, showStudent, updateStudent, deleteStudent, studentSpellCheck } = require("./router/student");
>>>>>>> 8971299c1d308af2bcebe2b46fcfb2c4e175dd03
const { showWords } = require("./router/wordcloud");
//const { showStudents } = require("./router/student");

const createError = require("http-errors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const app = express();
const port = 3001;

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "Dodam Dodam",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, httpOnly: false },
  })
);
app.use(morgan("dev"));

app.use(postTeacher);
app.use(postStudent);
app.use(login);
app.use(logout);
app.use(getUserMe);
app.use(handleErrors);
app.use(showStudents);
app.use(showJournal);
app.use(showMainEmo);
app.use(addComment);
app.use(addJournal);
app.use(updateJournal);
app.use(showStudent);
app.use(updateStudent);
app.use(deleteStudent);
app.use(showWords);
<<<<<<< HEAD
=======
app.use(studentSpellCheck);
>>>>>>> 8971299c1d308af2bcebe2b46fcfb2c4e175dd03

app.set("port", process.env.PORT || 3001);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
