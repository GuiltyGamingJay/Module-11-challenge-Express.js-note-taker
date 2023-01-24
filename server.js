// npm packages
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
// boilerplate code for express
const app=express();

const port = process.env.PORT || 3001;

