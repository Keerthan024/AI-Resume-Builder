import express from "express";
import { body, param } from "express-validator";
import multer from "../configs/multer.js";
import protect from "../middlewares/authMiddleware.js";
import {
  createResume,
  deleteResume,
  getResumeById,
  getPublicResumeById,
  updateResume
} from "../controllers/resumeController.js";

const resumeRouter = express.Router();

// --- Create Resume ---
resumeRouter.post(
  "/create",
  protect,
  body("title").trim().notEmpty().withMessage("Title is required"),
  createResume
);

// --- Delete Resume ---
resumeRouter.delete(
  "/delete/:resumeId",
  protect,
  param("resumeId").isMongoId().withMessage("Invalid resumeId"),
  deleteResume
);

// --- Get Resume by ID (Private) ---
resumeRouter.get(
  "/get/:resumeId",
  protect,
  param("resumeId").isMongoId().withMessage("Invalid resumeId"),
  getResumeById
);

// --- Get Resume by ID (Public) ---
resumeRouter.get(
  "/public/:resumeId",
  param("resumeId").isMongoId().withMessage("Invalid resumeId"),
  getPublicResumeById
);

// --- Update Resume ---
resumeRouter.put(
  "/update",
  protect,
  multer.single("image"), // multer file upload
  body("resumeId").isMongoId().withMessage("Invalid resumeId"),
  body("resumeData").notEmpty().withMessage("resumeData is required"),
  updateResume
);

export default resumeRouter;
