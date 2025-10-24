import express from "express";
import protect from "../middlewares/authMiddleware.js";
import { body } from "express-validator";
import {
  enhanceJobDescription,
  enhanceProfessionalSummary,
  uploadResume
} from "../controllers/aiController.js";

const aiRouter = express.Router();

// --- Enhance Professional Summary ---
aiRouter.post(
  "/enhance-pro-sum",
  protect,
  body("userContent").trim().notEmpty().withMessage("userContent is required"),
  enhanceProfessionalSummary
);

// --- Enhance Job Description ---
aiRouter.post(
  "/enhance-job-desc",
  protect,
  body("userContent").trim().notEmpty().withMessage("userContent is required"),
  enhanceJobDescription
);

// --- Upload Resume ---
aiRouter.post(
  "/upload-resume",
  protect,
  body("resumeText").trim().notEmpty().withMessage("resumeText is required"),
  body("title").optional().trim(),
  uploadResume
);

export default aiRouter;
