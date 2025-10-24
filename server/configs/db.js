import mongoose from "mongoose";

const connectDB = async () => {
    const projectName = "resume-builder";
    let mongodbURI = process.env.MONGODB_URI;

    if (!mongodbURI) {
        console.error("MONGODB_URI environment variable not set");
        process.exit(1); // Stop server if DB URI missing
    }

    // Remove trailing slash if present
    if (mongodbURI.endsWith("/")) {
        mongodbURI = mongodbURI.slice(0, -1);
    }

    const fullURI = `${mongodbURI}/${projectName}`;

    try {
        await mongoose.connect(fullURI, {
            serverSelectionTimeoutMS: 5000, // fail fast if DB unreachable
            maxPoolSize: 10, // connection pool
            ssl: true // enable if using Atlas / production
        });

        mongoose.connection.on("connected", () => {
            console.log("MongoDB connected successfully");
        });

        mongoose.connection.on("error", (err) => {
            console.error("MongoDB connection error:", err);
        });

        mongoose.connection.on("disconnected", () => {
            console.warn("MongoDB disconnected");
        });

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Stop server if DB connection fails
    }
};

export default connectDB;
