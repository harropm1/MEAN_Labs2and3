$(document).ready(function ()
{
    //what the logout button does on the login page
    $('#logout').on('click', () =>
    {
        document.location.href = "/";
    });
    //login form post
    $('#loginForm').on('submit', (e) =>
    {
        e.preventDefault();

        let data = {
            "username": $('#username').val(),
            "password": $('#password').val()
        };

        $.post("http://localhost:3000/users/login", data, function ()
        {
        })
            .done(function (res)
            {
                document.location.href = "/leagues"
            })
            .fail(function (e)
            {
                if (e.status === 401)
                {
                    $('#msgDiv').html('Account locked!');
                } 
                else if (e.status === 403)
                {
                    $('#msgDiv').html('Invalid Creds!');
                } 
                else
                {
                    $('#msgDiv').html(`Error: ${e.status}`);
                }

                $('#msgDiv').addClass('alert-danger');
                $('#username').focus();
            });
        $('#msgDiv').show();
    });
    //go to leagues page from the login page
    $('#toleagues').on("click", function ()
    {
        document.location.href = "/leagues";
    })

    //register form post, username, email, password
    $("#registerForm").on("submit", (e) =>
    {
        e.preventDefault();

        let data = {
            "username": $("#username").val(),
            "email": $("#email").val(),
            "password": $("#password").val()
        };

        $.post("http://localhost:3000/users/register", data, function ()
        {
        })
            .done(function (res)
            {
                document.location.href = "/users/login";
            })
            .fail(function()
            {
                $("#msgDiv").html("That username or password is already in use. Please use a different username/password.")
            })
    })
});