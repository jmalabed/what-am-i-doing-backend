const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// index
router.get("/", async (req, res) => {
  // res.send("hitting index");
  try {
    const allPosts = await Post.find();
    res.status(200).json(allPosts);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});
// show
router.get("/:id", async (req, res) => {
  // res.send("hitting show");
  try {
    const id = req.params.id;
    const foundPost = await Post.findById(id);
    res.status(200).json(foundPost);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});
// create
router.post("/", async (req, res) => {
  // res.send("hitting post");
  try {
    const createdPost = await Post.create(req.body);
    res.status(200).json(createdPost);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});
// destroy
router.delete("/:id", async (req, res) => {
  // res.send("hitting delete");
  try {
    const id = req.params.id;
    const deletedPost = await Post.findByIdAndRemove(id);
    res.status(200).json(deletedPost);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});
// update
router.put("/:id", async (req, res) => {
  // res.send("hitting put");
  try {
    const id = req.params.id;
    const updatedPost = await Post.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedPost);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

module.exports = router;
