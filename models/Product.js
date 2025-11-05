const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  rating: { type: Number, default: 0 },
  description: { type: String, required: true },
  image: { type: String, required: true },
  stock: { type: Number, required: true, default: 50 }, 
    lowStockNotified: { type: Boolean, default: false }, 
    notified: { type: Boolean, default: false },

}, { timestamps: true }); // optional, gives createdAt and updatedAt

module.exports = mongoose.model("Product", productSchema);
