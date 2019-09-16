"use strict";

/*This ready function does four things. 1. it calls locations to dynamically load a dropdown.
*
* @param - data - in each case, this refers to the data from the server.js
*/
$(function ()
{
    if (sessionStorage.getItem('loggedIn') == 'yes')
    {
        $("#login").hide();
        $("#signup").hide();
        $("#logout").show();
    }
    else 
    {
        document.location.href = "/users/login";
    }

    $('#logout').on('click', () =>
    {
        sessionStorage.setItem("loggedIn", "no");
        document.location.href = "/";
        console.log(sessionStorage);
    });

    let league;

    $("thead").hide();
    $("#addTeam").hide();

    //see 1 above
    $.getJSON("/leagues/data", function (data)
    {
        league = data;
        for (let i = 0; i < league.length; i++)
        {
            let newOption = $("<option>", { text: league[i].Name, value: league[i].Code })
            $("#locationSelect").append(newOption);
        }
    });
});
