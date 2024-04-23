const { Router } = require("express");
const signIn = require("../Firebase/signIn");
const checkAuth = require("../Firebase/checkAuth");


const firebase = Router();

firebase.post("/", signIn);
firebase.post("/", checkAuth);


module.exports = firebase;