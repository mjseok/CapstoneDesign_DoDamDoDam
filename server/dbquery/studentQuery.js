exports.selectAllWord = `SELECT word, frequency FROM wordcloud WHERE teacher_id=?`;
exports.insertJournal = `INSERT INTO journal(student_id, teacher_id, date, contents) VALUES(?,?,?,?)`;
exports.insertEmotion = `INSERT INTO journal(happy, neutral, fear, anger, sadness) VALUES(?,?,?,?,?)`;
exports.insertMainEmotion = `INSERT INTO journal(main_emotion) VALUES(?)`;
exports.selectComment = `SELECT comment FROM journal WHERE student_id=? AND date=?`;
exports.selectMainEmotion = `SELECT date, main_emotion FROM journal WHERE student_id=?`;
exports.selectJournal = `SELECT contents, comment FROM journal WHERE student_id=? AND date=?`;
