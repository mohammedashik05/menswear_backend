const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const products = require("./products"); // make sure products.js uses module.exports

dotenv.config();

const LINK = "mongodb://localhost:27017/RoyalFitz";

mongoose.connect(LINK)
  .then(async () => {
    console.log("✅ Connected to MongoDB");

    // Delete existing products to avoid duplicates
    await Product.deleteMany();
    console.log("🧹 Existing products cleared");

    // Insert new products
    await Product.insertMany(products);
    console.log(`✅ ${products.length} products added successfully`);

    mongoose.connection.close();
  })
  .catch(err => {
    console.error("❌ DB connection failed:", err);
  });
