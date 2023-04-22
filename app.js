const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.get("/aryan", (req, res) => {
    res.send("My favourite Batman game: Arkham Knight.")
})

app.get("/features", (req, res) => {
    res.send("Test modern apps directly in your browser");
})

app.listen(port, () => {
    console.log(`I'm able to listen on port ${port}`)
})