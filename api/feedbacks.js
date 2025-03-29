const express = require("express");
const Feedback = require("../models/Feedback");

const router = express.Router();

// Get all feedbacks
router.get("/", async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.json({ feedbacks });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch feedbacks" });
  }
});

// Add new feedback
router.post("/", async (req, res) => {
  const { username, comment, profile } = req.body;
  try {
    const feedback = new Feedback({ username, comment, profile });
    await feedback.save();
    res.status(201).json({ feedback });
  } catch (error) {
    res.status(500).json({ error: "Failed to add feedback" });
  }
});

// Delete feedback
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Feedback.findByIdAndDelete(id);
    res.status(200).json({ message: "Feedback deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete feedback" });
  }
});

module.exports = router;
