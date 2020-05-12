var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js")

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var allBurgs = {
        burgers: data
      };
      console.log(allBurgs);
      res.render("index", allBurgs);
    });
  });

//   router.post("/api/burgers", function(req, res) {
//     burgy.insertOne([
//       "name", "sleepy"
//     ], [
//       req.body.name, req.body.sleepy
//     ], function(result) {
//       // Send back the ID of the new quote
//       res.json({ id: result.insertId });
//     });
//   });