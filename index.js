require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const userDataRoutes = require("./routes/userData");
const productRoutes = require("./routes/productRoutes");
const orderplacedRoutes =require("./routes/orderPlacedRoutes");
const notificationRoutes = require("./routes/notificationRoutes");



const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// DB connection
connectDB();

// Routes


app.use("/api/auth", authRoutes);
app.use("/api/user", userDataRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orderPlaced",orderplacedRoutes);
app.use("/api/info",userRoutes);
app.use("/api/notifications", notificationRoutes);

// Root test
app.get("/", (req, res) => {
  res.send("Backend working ✅");
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
