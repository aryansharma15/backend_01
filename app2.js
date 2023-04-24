const express = require("express");
const app2 = express();
const port = 3001;

app2.get("/", (req, res) => {
    res.send("This is the second app, and here begins our express journey");
})

app2.get("/number", (req, res) => {
    res.send("I'd say we're 20% there.");
})

app2.listen(port, () => {
    console.log(`App's started. Running at port ${port}`)
})