const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { registerUser, loginUser, getUserInfo } = require("../controllers/authController");
const multer = require("multer");
const path = require("path");

const router = express.Router();

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"), // folder where files will be saved
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)), // unique filename
});

const upload = multer({ storage });

// Auth routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getUser", protect, getUserInfo);

// Image upload route
router.post("/upload-image", upload.single("image"), (req, res) => {
  if (!req.file) return res.status(400).json({ message: "No file uploaded" });
  const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
  res.status(200).json({ imageUrl });
});

// Export router
module.exports = router;
