"use strict";

$(function ()
{
    if (sessionStorage.getItem('loggedIn') == 'yes')
    {
        $("#login").hide();
        $("#signup").hide();
        $("#logout").show();
    }

    $('#logout').on('click', () =>
    {
        sessionStorage.setItem("loggedIn", "no");
    });
});