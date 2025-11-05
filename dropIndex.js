const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const LINK = "mongodb://localhost:27017/RoyalFitz";

mongoose.connect(LINK)
  .then(async () => {
    console.log("✅ Connected to MongoDB");

    const Product = require("./models/Product");

    try {
      // Drop the unique 'id' index
      await Product.collection.dropIndex("id_1");
      console.log("🗑️ Dropped unique index on 'id'");
    } catch (err) {
      if (err.codeName === "IndexNotFound") {
        console.log("ℹ️ No 'id' index found, skipping");
      } else {
        console.error(err);
      }
    }

    mongoose.connection.close();
  })
  .catch(err => console.error("❌ DB connection failed:", err));
