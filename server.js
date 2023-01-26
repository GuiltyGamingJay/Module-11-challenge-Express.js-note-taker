// npm packages
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// Boilerplate code for express
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// middleware
app.use(express.static("public"));

// routes folder 
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


app.listen(PORT, function () {
    console.log(`App listening at http://localhost:${PORT}`);
});