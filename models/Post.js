const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: String,
    text: String,
    isDone: Boolean,
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
