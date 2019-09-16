var express = require('express');
var router = express.Router();
let fs = require('fs');

/* GET all teams */

router.get('/data', function (req, res, next)
{
    try
    {
        res.end(fs.readFileSync('./data/teams.json'));
    }
    catch (err)
    {
        res.end('[]');
    }
});

module.exports = router;