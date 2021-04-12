var mysql = require('mysql');

module.exports = function () {
  return {
    init: function () {
      return mysql.createConnection({
        host: 'localhost',
        port: '3306', 
        user: 'root', //이 DB에서 사용하고 있는 user의 이름
        password: '0000',   //이 DB에서 사용하고 있는 user의 password
        database: 'dodam'    //내가 생성한 데이터베이스 이름
      })
    },
    
    test_open: function (con) {
      con.connect(function (err) {
        if (err) {
          console.error('mysql connection error :' + err);
        } else {
          console.info('mysql is connected successfully.');
        }
      })
    }
  }
};