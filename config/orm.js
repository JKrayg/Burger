var pool = require("./connection.js");

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
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
  
    return arr.toString();
  }

var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";"
        pool.query(queryString, function (err, result) {
            if (err) {
               throw err; 
            };
            cb(result);
        });
    },

    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += questionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        pool.query(queryString, vals, function (err, result) {
            if (err) {
               throw err; 
            } 
            cb(result);
        })
    },

    updateOne: function (table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        pool.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
                
            cb(result);
        })
    },

    removeOne: function (table, condition, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;

        pool.query(queryString, function (err, result) {
            if (err) {
               throw err; 
            }
            cb(result);
        })
    }
}

module.exports = orm;
