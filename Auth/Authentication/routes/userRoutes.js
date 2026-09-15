const express = require("express");
const router = express.Router();

const path = require("path");


// router.get('/login', userControllers.getLogin);
router.get('/login', user.getLogin);
router.get('/signup', user.getSignup);
router.get('/profile', user.getProfile);
