var mysql = require("mysql");


// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "Rootpassword3574",
//     database: "burgers_db"
//   });

  var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : '127.0.0.1:3306',
    user            : 'root',
    password        : 'Rootpassword',
    database        : 'burgers_db'
  });


pool.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = pool;