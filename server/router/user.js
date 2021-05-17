const db = require('../models');
const router = require('express').Router();
const { wrapper, CustomError, FormError } = require('./error');
const { isEmpty } = require('lodash');

exports.getUserMe = router.get(
  '/user/me',
  wrapper(async (req, res) => {
    if (isEmpty(req.session.userId) || isEmpty(req.session.userType)) throw new CustomError({ code: 404, message: '로그인 되어있지 않습니다.' });

    let teacher, student;

    if (req.session.userType === 'teacher') {
      teacher = await db.Teacher.findOne({
        where: { id: req.session.userId },
      });
      if (teacher) return res.status(200).json(teacher.dataValues);
    }

    if (req.session.userType === 'student') {
      student = await db.Student.findOne({
        where: { id: req.session.userId },
      });
      if (student) return res.status(200).json(student.dataValues);
    }

    if (!teacher && !student) throw new CustomError({ code: 404, message: '로그인 된 유저 정보를 가져오지 못했습니다.' });
  })
);
