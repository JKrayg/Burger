var connection = require("./connection");

var orm = {
    selectAll: function (tableName, cb) {
        var query = "SELECT * FROM" + tableName + ";"
        connection.query(query, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
    // insertOne: function (tableName, cb) {
    //     var query = connection.query("INSERT INTO" + tableName + "SET")
    //     connection.query(query, function (err, result) {
    //         if (err) throw err;
    //         cb(result);
    //     });
    // }
}

module.exports = orm;