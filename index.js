// Dependencies
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 9000;
const bodyParser = require("body-parser");
require("./db/db");

// Controllers
const categoryController = require("./controllers/category");
const postController = require("./controllers/post");

// CORS
const whiteList = ["http://localhost:3000"];

const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("not allowed by CORS"));
    }
  },
};

// middleware
app.use(cors(corsOptions));
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
