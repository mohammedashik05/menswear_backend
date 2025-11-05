const express = require("express");
const router = express.Router();
const Notification = require("../models/Notification");

// ✅ Get all notifications
router.get("/", async (req, res) => {
  try {
    const notifications = await Notification.find()
      .sort({ createdAt: -1 })
      .populate("productId", "name category stock");
    res.json({ success: true, notifications });
  } catch (error) {
    console.error("Error fetching notifications:", error.message);
    res.status(500).json({
      success: false,
      message: "Error fetching notifications",
      error: error.message,
    });
  }
});

// ✅ Get low-stock unread notifications count
router.get("/low-stock-count", async (req, res) => {
  try {
    // Count notifications mentioning "stock" and not yet read
    const count = await Notification.countDocuments({
      message: { $regex: /stock/i },
      isRead: false,
    });
    res.json({ success: true, count });
  } catch (error) {
    console.error("Error fetching low-stock count:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// ✅ Mark a notification as read
router.put("/:_id/read", async (req, res) => {
  try {
    await Notification.findByIdAndUpdate(req.params._id, { isRead: true });
    res.json({ success: true, message: "Notification marked as read" });
  } catch (error) {
    console.error("Error marking notification as read:", error.message);
    res.status(500).json({
      success: false,
      message: "Error updating notification",
      error: error.message,
    });
  }
});

module.exports = router;
