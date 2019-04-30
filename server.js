const express = require("express");
const app = express();
const users = require("./data");

console.log(users);

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