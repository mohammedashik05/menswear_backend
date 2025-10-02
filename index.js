require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

<<<<<<< HEAD
// DB connection
connectDB();
=======
// Connect to MongoDB
const LINK=process.env.MONGO_URI;
console.log(LINK);
>>>>>>> ea23ea4fd9213b7a327d68248e6247df323afaf9

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// Root test
app.get("/", (req, res) => {
  res.send("Backend working ✅");
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
