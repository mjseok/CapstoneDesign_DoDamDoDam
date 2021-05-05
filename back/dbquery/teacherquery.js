exports.selectAllWord = `SELECT word, frequency FROM wordcloud WHERE teacher_id=?`;

exports.selectMainEmotion = `SELECT date, main_emotion FROM journal WHERE student_id=?`;
exports.selectJournal = `SELECT contents, happy, neutral, fear, anger, sadness, main_emotion FROM journal WHERE student_id=? AND date=?`;
exports.insertComment = `UPDATE journal SET comment=? WHERE student_id=? AND date=?`;

exports.selectAllStudent = `SELECT name, number, photo FROM student WHERE teacher_id=?`;
exports.selectStudent = `SELECT * FROM student WHERE id=?`;
exports.insertStudent = `INSERT INTO student(id, password, teacher_id, number, birth, photo) VALUES(?,?,?,?,?,?)`;
exports.deleteStudent = `DELETE FROM student WHERE id=?`;
exports.updateStudent = `UPDATE student SET id=?, password=?, teacher_id=?, number=?, birth=?, photo=? WHERE id=?`;



