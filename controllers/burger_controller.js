var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js")

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
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
  })

module.exports = router;