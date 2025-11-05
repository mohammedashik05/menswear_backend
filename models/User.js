const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: {
    type: String,
    unique: true,
    required: true,
    match: /^[\w.-]+@[\w.-]+\.\w+$/,
  },
  password: { type: String, required: true },
  isAdmin: {
    type: Boolean,
    default: false, // normal user by default
  },
  
  wishlist: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" }, 
      name: String,
      price: Number,
      image: String
    }
  ],
  cart: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      name: String, 
      price: Number,
      image: String,
      quantity: { type: Number, default: 1 }
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
