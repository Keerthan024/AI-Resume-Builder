import multer from "multer";
import path from "path";
import crypto from "crypto";

// --- Storage configuration ---
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Ensure this folder exists
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = crypto.randomBytes(16).toString("hex") + ext;
    cb(null, name);
  }
});

// --- File filter for allowed types ---
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|pdf/;
  const ext = path.extname(file.originalname).toLowerCase();
  const mimetype = allowedTypes.test(file.mimetype);

  if (mimetype && allowedTypes.test(ext)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only images and PDFs are allowed."));
  }
};

// --- Limits ---
const limits = {
  fileSize: 10 * 1024 * 1024 // 10 MB max per file
};

const upload = multer({
  storage,
  fileFilter,
  limits
});

export default upload;
