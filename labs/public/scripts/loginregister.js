$(document).ready(function ()
{
    //what the logout button does
    $('#logout').on('click', () =>
    {
        document.location.href = "/";
    });
    //login button functions
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
                $('#msgDiv').removeClass('alert-danger');
                $('#msgDiv').addClass('alert-success');
                $('#msgDiv').html('Success!');

                $('#username').val('');
                $('#username').attr("disabled", true);
                $('#password').val('');
                $('#password').attr("disabled", true);

                $('#login').hide();
                $('#toleagues').show();
                $('#toleagues').focus();
                $('#logout').show();
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

                $('#msgDiv').removeClass('alert-success');
                $('#msgDiv').addClass('alert-danger');
                $('#username').focus();
            });
        $('#msgDiv').show();
    });
    //go to leagues page
    $('#toleagues').on("click", function ()
    {
        document.location.href = "/leagues";
    })
});