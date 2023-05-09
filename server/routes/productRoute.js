const express = require("express");
const {
  createProduct,
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  addToWishList,
  rating,
} = require("../controller/productController");
const router = express.Router();
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware.js");
router.post("/", authMiddleware, isAdmin, createProduct);

router.get("/:id", getProduct);
router.put("/wishlist", authMiddleware, addToWishList);
router.put("/rating", authMiddleware, rating);

router.put("/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);

router.get("/", getAllProducts);

module.exports = router;
