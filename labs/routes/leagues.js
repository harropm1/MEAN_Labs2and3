var express = require('express');
var router = express.Router();
let fs = require('fs');

/* GET leagues page. */
router.get('/', function(req, res, next) {
  res.render('leagues', { title: 'West Hartford Cares - Search' });
});

  
router.get('/data', function(req, res, next) {
    try
    {
        res.end(fs.readFileSync('./data/leagues.json'));
    }
    catch (err)
    {
        res.end('[]');
    }
});

module.exports = router;