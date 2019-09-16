var express = require('express');
var router = express.Router();

var auth = require('./../utils/auth');

// GET login page.
router.get('/login', function (req, res, next)
{
	res.render('login', { title: 'West Hartford Cares - Login' });
});

// GET register page.
router.get('/register', function (req, res, next)
{
	res.render('register', { title: 'West Hartford Cares - Register' });
});

//this is the post for the login page (/users/login)
router.post('/login', function (request, response)
{
	// get user data from form
	var username = request.body.username;
	var password = request.body.password;

	//run through authorization on other page
	if (auth.authUser(username, password))
	{
		request.session.username = username;
		response.statusCode = 200;
	}
	else
	{
		request.session.username = null;
		response.statusCode = 403;
	}
	response.end();
});

//this is the post for the register page (/users/register)
router.post('/register', function (request, response)
{
	// get user data from form
	var username = request.body.username;
	var email = request.body.email;
	var password = request.body.password;

	//run through authorization on other page
	if (auth.insertUser(username, email, password))
	{
		response.statusCode = 200;
	}
	else
	{
		response.statusCode = 403;
	}
	response.end();
});

router.get('/logout', function(req, res, next)
{
	req.session.username = null;
	res.redirect('/');
})
module.exports = router;