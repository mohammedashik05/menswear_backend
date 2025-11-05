const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

// ✅ Middleware to verify token
function authMiddleware(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(401).json({ message: "No token provided" });

  const parts = authHeader.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") {
    return res.status(401).json({ message: "Invalid token format" });
  }

  const token = parts[1];

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Invalid or expired token" });
    req.userId = decoded.id;
    next();
  });
}

// 🔹 Wishlist routes
router.post("/wishlist", authMiddleware, async (req, res) => {
  try {
    const { productId, name, price, image } = req.body; // now expect MongoDB _id
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const alreadyInWishlist = user.wishlist.find(
      (item) => item.productId === productId
    );

    if (!alreadyInWishlist) {
      user.wishlist.push({ productId, name, price, image });
      await user.save();
    }

    res.json({ message: "Added to wishlist", wishlist: user.wishlist });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put("/wishlist/remove", authMiddleware, async (req, res) => {
  try {
    const { productId } = req.body;
    console.log(productId);
    const user = await User.findById(req.userId);
    console.log(user)
    if (!user) return res.status(404).json({ message: "User not found" });

    user.wishlist = user.wishlist.filter(
      (item) => item.productId != productId
    );

    await user.save();
    res.json({ message: "Removed from wishlist", wishlist: user.wishlist });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 🔹 Cart routes
router.post("/cart", authMiddleware, async (req, res) => {
  try {
    // console.log("req.userId:", req.userId);
    const { productId, name, price, image, quantity } = req.body;
    const user = await User.findById(req.userId);
    // console.log(user);
    if (!user) return res.status(404).json({ message: "User not found" });

    const existingItem = user.cart.find(
      (item) => item.productId.toString() === productId
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      user.cart.push({ productId, name, price, image, quantity });
    }

    await user.save();
    res.json({ message: "Added to cart", cart: user.cart });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put("/cart", authMiddleware, async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const cartItem = user.cart.find((item) => item.productId.toString() === productId);
    if (!cartItem) return res.status(404).json({ message: "Product not found in cart" });

    cartItem.quantity = quantity;
    await user.save();
    res.json({ message: "Cart updated", cart: user.cart });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/cart/:productId", authMiddleware, async (req, res) => {
  try {
    const { productId } = req.params;
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.cart = user.cart.filter((item) => item.productId.toString() !== productId);
    await user.save();
    res.json({ message: "Removed from cart", cart: user.cart });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put("/cart/clear", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.cart = [];
    await user.save();

    res.json({ success: true, message: "Cart cleared successfully", cart: user.cart });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 🔹 Get user wishlist & cart
router.get("/data", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ wishlist: user.wishlist, cart: user.cart });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
