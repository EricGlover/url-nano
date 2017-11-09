const express = require("express");
const router = express.Router();
const util = require("util");

/* GET home page. */
router.get("/", function(req, res, next) {
  // console.log(util.inspect(req));
  const ip = req.clientIp;
  res.end(ip);
  // res.render("index", { title: "Express" });
  // const prev = require("../req");
  // res.json(req);
  // res.json(prev);
  // res.json(req);
});

module.exports = router;
