const OrderPlaced = require("../models/OrderPlaced");
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

// Middleware to verify token
function authMiddleware(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).json({ message: "No token provided" });

  const parts = authHeader.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") 
    return res.status(401).json({ message: "Invalid token format" });

  const token = parts[1];

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Invalid or expired token" });
    req.userId = decoded.id;
    next();
  });
}

// Get all order data
router.get("/all", async (req, res) => {
  try {
    const orders = await OrderPlaced.find().sort({ createdAt: -1 }); // latest first
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Save an order
router.post("/orderplaced", authMiddleware, async (req, res) => {
  try {
    const { username, email, address, mobileNo, cart, totalAmount, status } = req.body;

    if (!username || !email || !address || !mobileNo || !cart || !totalAmount || !status) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Ensure cart contains valid product references
    const cartWithIds = cart.map((item) => ({
      productId: item._id || item.productId,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: item.qty || item.quantity,
    }));

    const newOrder = new OrderPlaced({
      userId: req.userId, // ✅ link order to logged-in user
      username,
      email,
      address,
      mobileNo,
      cart,
      totalAmount,
      status: "Pending", // default status
    });


    await newOrder.save();

    res.status(201).json({ message: "Order placed successfully", order: newOrder });
  } catch (err) {
    console.error("🔥 Error placing order:", err.message);
    res.status(500).json({ message: err.message });
  }
});


// Update order status
router.put("/update/:id", async (req, res) => {
  try {
    const { status } = req.body;
    if (!status) return res.status(400).json({ success: false, message: "Status is required" });

    const updatedOrder = await OrderPlaced.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!updatedOrder) return res.status(404).json({ success: false, message: "Order not found" });

    res.json({
      success: true,
      message: `Order marked as ${status}`,
      order: updatedOrder,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// GET /api/orderPlaced/user-orders  (protected route)
router.get("/user-orders", authMiddleware, async (req, res) => {
  try {
    const orders = await OrderPlaced.find({ userId: req.userId }).sort({ createdAt: -1 });
    console.log(orders);
    res.json({ success: true, orders });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching orders" });
  }
});

module.exports = router;
