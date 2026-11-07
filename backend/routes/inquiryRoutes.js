
import express from "express";
import { createInquiry } from "../controllers/inquiryController.js";

const router = express.Router();

// Endpoint untuk mengirim data reservasi
router.post("/", createInquiry);

export default router;