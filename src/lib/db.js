import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("❌ MONGO_URI is missing in .env file");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    console.log("✅ Using existing MongoDB connection");
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("⏳ Connecting to MongoDB..."); // Log when starting
    cached.promise = mongoose.connect(MONGO_URI, { 
      bufferCommands: false 
    }).then((mongoose) => {
      console.log("✅ New MongoDB connection established"); // Log success
      return mongoose;
    });
  }
  
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    console.error("❌ MongoDB Connection Error:", e); // Log failure
    throw e;
  }

  return cached.conn;
}

export default connectDB;