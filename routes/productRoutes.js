const express = require("express");
const router = express.Router();
const multer = require("multer");
const Product = require("../models/Product");
const Notification = require("../models/Notification"); // 🆕
const cloudinary = require("../config/cloudinary");
const fs = require("fs");
require("dotenv").config();

const upload = multer({ dest: "uploads/" });

// 🟢 ADD NEW PRODUCT
router.post("/add", upload.single("image"), async (req, res) => {
  try {
    const { name, price, category, rating, description, stock } = req.body;

    if (!req.file) {
      return res.status(400).json({ success: false, message: "Image file is required" });
    }

    const uploadResult = await cloudinary.uploader.upload(req.file.path, {
      folder: `royalfitz_products/${category}`,
    });
    fs.unlinkSync(req.file.path);

    const product = await Product.create({
      name,
      price,
      category,
      rating,
      description,
      stock: stock || 0, // 🆕 Include stock
      image: uploadResult.secure_url,
    });

    res.status(201).json({ success: true, product });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// 🟡 GET ALL PRODUCTS
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 🟡 GET PRODUCTS BY CATEGORY
router.get("/category/:category", async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 🟡 GET PRODUCT BY ID
router.get("/id/:_id", async (req, res) => {
  try {
    const product = await Product.findById(req.params._id);
    if (!product) return res.status(404).json({ message: "Product not found....." });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 🟠 UPDATE PRODUCT
router.put("/update/:_id", upload.single("image"), async (req, res) => {
  try {
    const { name, price, category, rating, description, stock } = req.body;



    const product = await Product.findById(req.params._id);

    if (!product) return res.status(404).json({ message: "Product not found" });

    let updatedImageUrl = product.image;

    // If new image is uploaded, replace old one
    if (req.file) {
      const uploadResult = await cloudinary.uploader.upload(req.file.path, {
        folder: `royalfitz_products/${category || product.category}`,
      });
      fs.unlinkSync(req.file.path);
      updatedImageUrl = uploadResult.secure_url;
    }

    // 🧱 Update fields
    product.name = name || product.name;
    product.price = price || product.price;
    product.category = category || product.category;
    product.rating = rating || product.rating;
    product.description = description || product.description;
    product.stock = stock !== undefined ? stock : product.stock; // 🆕
    product.image = updatedImageUrl;

    const updatedProduct = await product.save();
    res.json({ success: true, product: updatedProduct });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// 🔴 DELETE PRODUCT
router.delete("/delete/:_id", async (req, res) => {
  try {
    const product = await Product.findById(req.params._id);

    if (!product) return res.status(404).json({ message: "Product not found" });

    // Delete from Cloudinary
    const publicIdMatch = product.image.match(/\/royalfitz_products\/(.*)\.[a-z]+$/i);
    if (publicIdMatch) {
      try {
        await cloudinary.uploader.destroy(`royalfitz_products/${publicIdMatch[1]}`);
      } catch (error) {
        console.error("Cloudinary delete error:", error.message);
      }
    }

    await product.deleteOne();
    res.json({ success: true, message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});


// 🧮 REDUCE STOCK WHEN USER BUYS PRODUCT
router.put("/reduce-stock/:id", async (req, res) => {
  try {
    const { quantity } = req.body;

    if (!quantity || quantity <= 0) {
      return res.status(400).json({
        success: false,
        message: "Quantity is required",
      });
    }

    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    product.stock -= quantity;
    if (product.stock < 0) product.stock = 0;

    // ✅ Notify admin if stock <= 10 and not notified before
    if (product.stock <= 10 && !product.lowStockNotified) {
      await Notification.create({
        message: `${product.name} stock is low (${product.stock} left)`,
        productId: product._id,
      });
      product.lowStockNotified = true;
    }

    // ✅ When stock > 10, reset notification flag
    if (product.stock > 10) {
      product.lowStockNotified = false;
    }

    await product.save();

    return res.json({
      success: true,
      message: "Stock updated successfully",
      stock: product.stock,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


// 🔹 Get low-stock products (<=10)
router.get("/low-stock", async (req, res) => {
  try {
    const products = await Product.find({ stock: { $lte: 10 } });
    res.json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch low stock products" });
  }
});

// 🔹 Mark product as notified
router.put("/mark-notified/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: { notified: true } }, // optional field
      { new: true }
    );
    res.json({ success: true, message: "Product marked as notified", product });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error marking product notified" });
  }
});


module.exports = router;
