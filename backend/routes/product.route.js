import express from "express";
import {
  getProducts,
  createPost,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", createPost);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
