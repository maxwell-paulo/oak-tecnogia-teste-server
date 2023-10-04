import { Router } from "express";
import {
  createProductController,
  listProductsController,
} from "../controllers/product.js";

export const router = Router();

router.post("/product", createProductController);

router.get("/product", listProductsController);
