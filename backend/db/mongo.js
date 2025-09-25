const mongoose = require("mongoose");

/**
 * Establishes a connection to MongoDB using Mongoose.
 */
async function connectMongo() {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Optional: Enable auto index creation in dev
      autoIndex: process.env.NODE_ENV !== 'production'
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1); // Exit the app if MongoDB fails
  }
}

module.exports = connectMongo;
