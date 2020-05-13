var connection = require("./connection.js");

function questionMarks(input) {
    var arr = [];

    for (var i = 0; i < input; i++) {
        arr.push("?");
    }

    return arr.toString();
}

var orm = {
    selectAll: function (tableName, cb) {
        var query = "SELECT * FROM " + tableName + ";"
        connection.query(query, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (table, cols, vals, cb) {
        var query = "INSERT INTO " + table;

        query += " (";
        query += cols.toString();
        query += ") ";
        query += "VALUES (";
        query += questionMarks(vals.length);
        query += ") ";

        console.log(query);

        connection.query(query, vals, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;