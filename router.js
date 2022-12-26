var express = require('express');
var router = express.Router();
const DatabaseService = require('./database-service');


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});

router.get('/runs', (req, res, next) => {
    DatabaseService.getAllRuns().then(runs => {
        res.send(runs);
    }).catch(error => {
        res.send(error);
    });
});

module.exports = router;
