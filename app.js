const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.get("/aryan", (req, res) => {
    res.send("MBatman: Arkham Knight.")
    res.status(400).send("Hello boys & girls!");
})

app.get("/about", (req, res) => {
    const about = {
        username: "aryans15",
        bio: "could be riddler",
        folr: 600,
        folg: 900
    }

    res.status(200).json(about);
})

app.get("/api/v1/:token", (req, res) => {
    console.log(req.params.token);
    res.status(200).json({ param: req.params.token })
})

// Trying to hide password

app.get("/api/checkname/:password", (req, res) => {
    console.log(req.params.password);
    res.status(404).send("Password is 123456.");
    res.status(200).json({ param: req.params.password })
});


app.get("/features", (req, res) => {
    res.send("Test modern apps directly in your browser");
})

app.listen(port, () => {
    console.log(`I'm able to listen on port ${port}`)
})