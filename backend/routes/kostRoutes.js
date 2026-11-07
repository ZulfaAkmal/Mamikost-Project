import express from "express";
import {
    getAllKosts,
    getKostById
} from "../controllers/kostController.js";

const router = express.Router();

router.get("/", getAllKosts);
router.get("/:id", getKostById);

export default router;