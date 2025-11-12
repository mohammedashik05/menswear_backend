const express = require("express");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { Readable } = require("stream");
const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");
const { v2: cloudinary } = require("cloudinary");

dotenv.config();
const router = express.Router();

// 🧰 Multer setup (memory storage for Cloudinary)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// ☁️ Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

// ✅ GET: User Profile
router.get("/profile", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ Verify Admin
router.get("/verify-admin", async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: "No token" });

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ isAdmin: user.isAdmin });
  } catch (err) {
    res.status(403).json({ isAdmin: false, message: "Invalid token" });
  }
});

// ✅ GET: All users (no password)
router.get("/", async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json({ success: true, users });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ✅ GET: Single user by email
router.get("/:email", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email }).select("-password");
    if (!user)
      return res.status(404).json({ success: false, message: "User not found!" });
    res.json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ✅ PUT: Update profile info
router.put("/update-profile", authMiddleware, async (req, res) => {
  try {
    const { name, email, mobileNo } = req.body;
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (name) user.username = name;
    if (email) user.email = email;
    if (mobileNo) user.mobileNo = mobileNo;

    await user.save();
    res.json({ success: true, user });
  } catch (err) {
    res.status(500).json({ message: "Error updating profile" });
  }
});

// ✅ PUT: Update password
router.put("/update-password", authMiddleware, async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Old password incorrect" });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    await user.save();

    res.json({ success: true, message: "Password updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error updating password" });
  }
});

// ✅ PUT: Upload or Update Avatar
router.put("/upload-avatar", authMiddleware, upload.single("avatar"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    const user = await User.findById(req.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Upload to Cloudinary using a safe Promise wrapper
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: "user_avatars", public_id: `${user._id}_${Date.now()}` },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      Readable.from(req.file.buffer).pipe(uploadStream);
    });

    user.avatar = result.secure_url;
    await user.save();

    res.json({ success: true, avatar: result.secure_url });
  } catch (err) {
    console.error("☁️ Cloudinary upload error:", err.message);
    res.status(500).json({ message: "Error uploading image", error: err.message });
  }
});

module.exports = router;
