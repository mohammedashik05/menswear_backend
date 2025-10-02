const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const LINK = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/testdb";
    await mongoose.connect(LINK, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
