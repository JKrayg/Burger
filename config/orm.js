var connection = require("./connection.js");

var orm = {
    selectAll: function (tableName, cb) {
        var query = "SELECT * FROM " + tableName + ";"
        connection.query(query, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;