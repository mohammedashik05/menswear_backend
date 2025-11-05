const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // const LINK = process.env.MONGO_URI ;
        const LINK ="mongodb://localhost:27017/RoyalFitz";
    await mongoose.connect(LINK, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
