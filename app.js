//Dependencies
require("dotenv").config();
const express = require("express");
const ejs = require("ejs");

//Initialise app
const app = express();

//Set port and listen
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});

//View engine
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Endpoints
const publicRoutes = require("./routes/publicRoutes");
const authRoutes = require("./routes/authRoutes");
const publicApis = require("./api/publicApi");

//Endpoints
app.use(publicRoutes);
app.use("/auth", authRoutes);
app.use("/api/v1", publicApis);
