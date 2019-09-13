var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'West Hartford Cares - Login' });
});

/* GET register page. */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'West Hartford Cares - Register' });
});

//this is the post for the login page (/users/login)
router.post('/login', function(request, response) {
  // get user data from form
  var username = request.body.username;
  var password = request.body.password;
  console.log(username);
  console.log(password);
  response.statusCode = 200;
  response.end();
});

//this is the post for the register page (/users/register)
router.post('/register', function(request, response) {
  // get user data from form
  var username = request.body.username;
  var email = request.body.email;
  var password = request.body.password;
  console.log(username);
  console.log(email);
  console.log(password);
  response.statusCode = 200;
  response.end();
});
module.exports = router;