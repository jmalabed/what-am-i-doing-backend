// Dependencies
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 9000;
const bodyParser = require("body-parser");
require("./db/db");

// Controllers
const categoryController = require("./controllers/category");
const postController = require("./controllers/post");

// middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routing
app.use("/post", postController);
app.use("/category", categoryController);

// Set up port
app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
