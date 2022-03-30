const { urlencoded } = require("express");
var express = require("express");
const url = require('url');
var router = express.Router();
var mysql = require('../db/dataAccess');

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/createAsync', function(req, res, next){
  // code to add data to DB
  mysql.createAsync(req.query["name"], req.query["email"], req.query["password"]).then((result) => {
    res.send("The insert worked correctly: " + result);
  });
});

module.exports = router;
