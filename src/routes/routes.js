import { Router } from "express";
import {
  createProductController,
  listProductsController,
  listProductsByValueController,
} from "../controllers/product.js";

export const router = Router();

router.post("/product", createProductController);

router.get("/product", listProductsController);

router.get("/product-by-value", listProductsByValueController);
