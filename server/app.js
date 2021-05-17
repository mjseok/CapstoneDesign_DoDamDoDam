const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const { handleErrors } = require('./router/error');
const session = require('express-session');
const { sequelize } = require('./models');
const { getUserMe } = require('./router/user');
const { login, postTeacher, postStudent } = require('./router/auth');
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
app.use(
  session({
    secret: 'Dodam Dodam',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, httpOnly: false },
  })
);
app.use(morgan('dev'));

app.set('port', process.env.PORT || 3000);

app.use(postTeacher);
app.use(postStudent);
app.use(login);
app.use(getUserMe);
app.use(handleErrors);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
