const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  username: { type: String, required: true },
  comment: { type: String, required: true },
  profile: { type: String },
  timestamp: { type: String, default: new Date().toISOString() },
});

module.exports = mongoose.model("Feedback", feedbackSchema);
