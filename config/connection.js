var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "Rootpassword3574",
    database: "burgers_db",
    socketPath: '/var/run/mysqld/mysqld.sock'
  });
}



connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;