const { urlencoded } = require("express");
var express = require("express");
const url = require('url');
var router = express.Router();

router.get("/", function(req, res, next) {    
    var test = "";
    for (var propName in req.query) {
        if (req.query.hasOwnProperty(propName)) {
            test += propName + " " + req.query[propName] + "; ";
        }
    }
    res.send("Parameters are: " + test);
});

module.exports = router;