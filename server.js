const express = require("express");
const mysql = require("mysql");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.listen(8000, () => {
    console.log("Listening to port 8000");
})