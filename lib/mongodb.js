import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;
console.log('[MongoDB] URI:', process.env.MONGODB_URI);


if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

// Global cache
let cached = global.mongoose;

if (!cached) {
  console.log('[MongoDB] Initializing global cache');
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  // Already connected
  if (cached.conn) {
    console.log('[MongoDB] Using existing database connection');
    return cached.conn;
  }

  // No existing connection promise
  if (!cached.promise) {
    console.log('[MongoDB] Creating new connection...');
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongoose) => {
        console.log('[MongoDB] Successfully connected to database');
        return mongoose;
      })
      .catch((err) => {
        console.error('[MongoDB] Connection error:', err);
        throw err;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    console.error('[MongoDB] Failed to establish connection');
    throw e;
  }

  return cached.conn;
}

export default connectDB;
