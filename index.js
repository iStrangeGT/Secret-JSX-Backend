const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./utils/db");
const feedbackRoutes = require("./api/feedbacks");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/feedbacks", feedbackRoutes);


// Root Route
app.get("/", (req, res) => {
    res.send("Welcome to the Secret Store Backend API!");
});


// Start server
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
