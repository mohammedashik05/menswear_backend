const mongoose = require("mongoose");

const orderPlacedSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: {
      type: String,
      required: true,
      match: /^[\w.-]+@[\w.-]+\.\w+$/,
    },
    address: { type: String, required: true },
    mobileNo: { type: String, required: true },
    cart: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" }, // reference to Product
        name: String,
        price: Number,
        image: String,
        quantity: { type: Number, required: true },
      },
    ],
    totalAmount: { type: Number, required: true }, // optional, for admin dashboard quick view
    status: { type: String, default: "Pending" }, // Pending, Shipped, Delivered, etc.
  },
  { timestamps: true }
);

module.exports = mongoose.model("OrderPlaced", orderPlacedSchema);
