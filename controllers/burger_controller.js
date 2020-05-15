var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js")

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var allBurgs = {
      burger: data
    };
    console.log(allBurgs);
    res.render("index", allBurgs);
  });
});

router.post("/burger", function (req, res) {
  burger.insertOne(["burger_name"], [req.body.burger_name], function (data) {
    res.redirect("/");
  })
});

router.put("/burger/:id", function (req, res) {
  var condition = 'id = ' + req.params.id;

  burger.updateOne({
    devoured: true
  }, condition, function (result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();

    } else {
      res.redirect("/")
      res.status(200).end();

    }
  });
});

module.exports = router;