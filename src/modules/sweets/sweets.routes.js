import express from "express";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { adminMiddleware } from "../../middlewares/admin.middleware.js";

import {
  createSweet,
  getAllSweets,
  searchSweets,
  updateSweet,
  deleteSweet
} from "./sweets.controller.js";

const router = express.Router();

//Protected routes
router.post("/", authMiddleware, createSweet);
router.get("/", authMiddleware, getAllSweets);

router.get("/search", authMiddleware, searchSweets);
router.put("/:id", authMiddleware, updateSweet);

//Admin only
router.delete("/:id", authMiddleware, adminMiddleware, deleteSweet);

export default router;
