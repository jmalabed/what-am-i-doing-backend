const express = require("express");
const router = express.Router();
const Category = require("../models/Category");

// index
router.get("/", async (req, res) => {
  // res.send("hitting index");
  try {
    const allCategories = await Category.find();
    res.status(200).json(allCategories);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});
// show
router.get("/:id", async (req, res) => {
  // res.send("hitting show");
  try {
    const id = req.params.id;
    const foundCategory = await Category.findById(id);
    res.status(200).json(foundCategory);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});
// create
router.post("/", async (req, res) => {
  // res.send("hitting post");
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});
// destroy
router.delete("/:id", async (req, res) => {
  // res.send("hitting delete");
  try {
    const id = req.params.id;
    const deletedCategory = await Category.findByIdAndRemove(id);
    res.status(200).json(deletedCategory);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});
// update
router.put("/:id", async (req, res) => {
  // res.send("hitting put");
  try {
    const id = req.params.id;
    const updatedCategory = await Category.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedCategory);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

module.exports = router;
