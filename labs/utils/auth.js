const fs = require('fs');

//read saved data from file
let getUsers = () =>
{
    try 
    {
        let usersString = fs.readFileSync('./data/users.json');
        return JSON.parse(usersString);
    }
    catch (err)
    {
        return [];
    }
};

//save data in file
let saveUsers = (users) =>
{
    fs.writeFileSync('./data/users.json', JSON.stringify(users));
};

//insert a new user
let insertUser = (username, email, password) =>
{
    // console.log(here);
    let users = getUsers();

    //in ES6, if the parameter and property names are the same, you can just write them like this:
    let user = {
        username,
        email,
        password
    };

    //ensure there are no duplicates
    let duplicateUsers = users.filter((user) =>
    {
        return (user.username === username || user.email === email);
    });

    //save the user
    if (duplicateUsers.length === 0)
    {
        users.push(user);
        saveUsers(users);
        return user;
    }
};

//authenticate the user
let authUser = (username, password) =>
{
    let users = getUsers();
    //another arrow function
    let filteredUsers = users.filter((user) => user.username === username && user.password === password);
    return filteredUsers[0];
}

//exporting functions to expose/call from app.js
module.exports = {
    insertUser,
    authUser
};