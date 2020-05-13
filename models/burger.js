var orm = require("../config/orm.js")

var burgy = {
    selectAll: function (cb) {
        orm.selectAll("burger", function (res) {
            cb(res)
        });

    },
    insertOne: function (cols, vals, cb) {
        orm.insertOne("burger", cols, vals, function(res) {
            cb(res);
        })
    }
};

module.exports = burgy;