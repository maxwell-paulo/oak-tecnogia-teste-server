import { Router } from "express";
import { createProductController } from "../controllers/product.js";

export const router = Router();

router.post("/product", createProductController);
