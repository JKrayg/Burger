var connection = require("./connection.js");

function questionMarks(input) {
    var arr = [];

    for (var i = 0; i < input; i++) {
        arr.push("?");
    }

    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];

        arr.push(key + "=" + value);
    }

    return arr.toString();
}

var orm = {
    selectAll: function (tableName, cb) {
        var query = "SELECT * FROM " + tableName + ";"
        connection.query(query, function (err, result) {
            // if (err) {
            //    throw err; 
            // };
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
            if (err) {
               throw err; 
            } 
            cb(result);
        })
    },

    updateOne: function (table, objColVals, condition, cb) {
        var query = "UPDATE " + table;

        query += " SET ";
        query += objToSql(objColVals);
        query += " WHERE ";
        query += condition;

        connection.query(query, function (err, result) {
            if (err) {
                throw err;
            }
                
            cb(result);
        })
    },

    removeOne: function (table, condition, cb) {
        var query = "DELETE FROM " + table;
        query += " WHERE ";
        query += condition;

        connection.query(query, function (err, result) {
            if (err) {
               throw err; 
            }
            cb(result);
        })
    }
}

module.exports = orm;
