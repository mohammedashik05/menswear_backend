const mongoose = require("mongoose");

const orderPlacedSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    username: String,
    email: String,
    address: String,
    mobileNo: String,
    totalAmount: Number,
    cart: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        name: String,
        image: String,
        quantity: Number,
        price: Number,
      },
    ],
    status: {
      type: String,
      enum: ["Pending", "Delivered", "Canceled"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("OrderPlaced", orderPlacedSchema);
