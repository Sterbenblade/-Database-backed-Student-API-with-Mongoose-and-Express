require("dotenv").config();
require("dns").setServers(["1.1.1.1"]);
const mongoose = require("mongoose");

const connectDB = async () => {
    if (!process.env.MONGO_URI) {
        throw new Error("MONGO_URI is missing from .env");
    }

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 10000,
        });
        console.log("MongoDB connected");
    } catch (error) {
        throw new Error(`MongoDB connection error: ${error.message}`);
    }
};

module.exports = connectDB;
