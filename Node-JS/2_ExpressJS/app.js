const express = require("express");
const path = require("path");

const app = express();

const PORT = 3002;

app.use(express.static(path.join(__dirname, "public")));

app.get("/submit", (req, res) => {
    const { username, city } = req.query;

    res.send(`My name is ${username} and my city is ${city}`);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});