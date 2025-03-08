const express = require("express");
const app = express();

app.get("/getcookies", (req, res) => {
    res.cookie("email", "harsh@mail.com");
    res.cookie("password", "1234@1234");
    res.send("Cookies saved!")
})

app.get("/", (req,res) => {
    res.send("DEMO APP");
})

app.get("/users", (req,res) => {
    res.send("User Page");
})

app.listen(3000, () => {
    console.log("DEMO app is running!");
})