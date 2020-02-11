var express = require('express');
var router = express.Router();

router.use(function(req, res, next){
    console.log("Initialized JSON");
    next();
});

router.post('/', function(req, res, next) {
    console.log('Printing JSON');
    res.json({
        "error":null,
        "data":[
            {"topping":"cherry", "quantity":2},
            {"topping":"plain", "quantity":6},
            {"topping":"chocolate", "quantity":3}
        ]
    });
});

module.exports = router;
