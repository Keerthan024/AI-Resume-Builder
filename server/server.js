import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import resumeRouter from "./routes/resumeRoutes.js";
import aiRouter from "./routes/aiRoutes.js";
import authRouter from "./routes/authRoutes.js"; // Add this import
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import hpp from "hpp";
import compression from "compression";

// --- Create Express App ---
const app = express();
const PORT = process.env.PORT || 3000;

// --- Security Middlewares ---
app.use(helmet());        // sets secure HTTP headers
app.use(hpp());           // prevent HTTP Parameter Pollution
app.use(compression());   // gzip compression
app.use(cookieParser());  // parse cookies

// --- Body Parser ---
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));

// --- Rate Limiter ---
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,                 // limit each IP to 100 requests per window
  standardHeaders: true,
  legacyHeaders: false
});
app.use(limiter);

// --- CORS Configuration ---
const allowedOrigins = (process.env.CORS_ORIGINS || "").split(",").filter(Boolean);
app.use(cors({
  origin: function(origin, callback){
      if(!origin) return callback(null, true); // allow Postman / server-side requests
      if(allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error("Not allowed by CORS"));
  },
  credentials: true
}));

// --- Database Connection ---
await connectDB();

// --- Routes ---
app.get("/", (req, res) => res.send("Server is live..."));
app.use("/api/users", userRouter);
app.use("/api/resumes", resumeRouter);
app.use("/api/ai", aiRouter);
app.use("/api/auth", authRouter);

// --- 404 Handler ---
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// --- Global Error Handling Middleware ---
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error"
  });
});

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});