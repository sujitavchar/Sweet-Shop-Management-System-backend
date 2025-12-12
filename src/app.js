import express from "express";
import cors from "cors";
import authRoutes from "./modules/auth/auth.routes.js";
import sweetsRoutes from "./modules/sweets/sweets.routes.js";
import inventoryRoutes from "./modules/inventory/inventory.routes.js";

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000' //Allow requests from localhost only
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/sweets", sweetsRoutes);
app.use("/api/sweets", inventoryRoutes);

export default app;
