const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");

router.get("/signup", (req, res) => {
    res.render("users/signup.ejs");
});

router.post("/signup", wrapAsync(async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registerdUser = await User.register(newUser, password);
        console.log(registerdUser);
        req.flash("success", "Welcome To WanderLust!");
        res.redirect("/listings");
    }

    catch(e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }

}));

router.get("/signin", (req, res) => {
    res.render("users/signin.ejs")
})

router.post("/signin", passport.authenticate("local", {failureRedirect: '/signin', failureFlash: true}), async(req, res) => {
    req.flash("success", "Welcome Back To WanderLust");
    res.redirect("/listings");
});

module.exports = router;