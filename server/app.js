const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const { handleErrors } = require('./router/error');
const session = require('express-session');
const { sequelize } = require('./models');
const { getUserMe } = require('./router/user');
const { login, postTeacher, postStudent, logout } = require('./router/auth');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const studentRouter = require('./routes/student');
const teacherRouter = require('./routes/teacher');
const { studentSpellCheck } = require('./router/student');
require('dotenv').config();
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
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: 'Dodam Dodam',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, httpOnly: false },
  })
);
app.use(morgan('dev'));

app.use(postTeacher);
app.use(postStudent);
app.use(login);
app.use(logout);
app.use(getUserMe);
app.use(studentSpellCheck);
app.use(handleErrors);

app.set('port', process.env.PORT || 3001);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
