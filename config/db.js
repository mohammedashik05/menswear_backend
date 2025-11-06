const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const LINK = "mongodb+srv://mohammedashik2k05_db_user:ashik6905@cluster0.gap174k.mongodb.net/?appName=Cluster0";
        // const LINK ="mongodb://localhost:27017/RoyalFitz";
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
