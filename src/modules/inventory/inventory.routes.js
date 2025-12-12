import express from "express";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { adminMiddleware } from "../../middlewares/admin.middleware.js";

import {
  purchaseSweet,
  restockSweet
} from "./inventory.controller.js";

const router = express.Router();

//User can purchase
router.post("/:id/purchase", authMiddleware, purchaseSweet);

//Only admin can restock
router.post("/:id/restock", authMiddleware, adminMiddleware, restockSweet);

export default router;
