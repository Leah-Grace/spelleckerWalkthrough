const express = require("express");
const app = express();
const users = require("./data");
const getemail = require("./getemail");

console.log(users);

//get user by index
app.get("/getuser", (req, res) =>{
    const index = req.query.index;
    const oneUser = users[index];
    res.send(oneUser);
});


//get user by index
app.get("/getemail", (req, res) =>{
    const name = req.query.name;
    const email = getemail(users, name);
    res.send(email);

});

app.get("/greet", (req, res) => {
    const userName = req.query.user
res.send(`Hello ${userName}!`);
});

app.get("/goodbye", (req, res) => {
    const userName = req.query.user
res.send(`Goodbye ${userName}!`);
});

app.get("/weather", (req, res) => {
    const userName = req.query.user
    res.send(`How is the weather ${userName}?`);
});

const port = process.env.PORT || 5501;
app.listen(port, () => console.log(`Server listening on port ${port}`));