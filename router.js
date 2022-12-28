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

router.post('/runs', (req, res, next) => {
    DatabaseService.createRun(req.body).then(successResult => {
        res.send(successResult);
    }).catch(error => {
        res.send(error);
    });
});

router.put('/runs/:runId', (req, res, next) => {
    const runId = req.params.runId;
    const run = req.body;
    DatabaseService.updateRun(runId, run).then(runs => {
        res.send(runs);
    }).catch(error => {
        res.send(error);
    });
});

router.delete('/runs/:runId', (req, res, next) => {
    DatabaseService.deleteRun(req.params.runId).then(successResult => {
        res.send(successResult);
    }).catch(error => {
        res.send(error);
    });
});

module.exports = router;
