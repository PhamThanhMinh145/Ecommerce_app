const express = require("express");
const {
  uploadImages,
  deleteImages,
} = require("../controller/uploadController");
const router = express.Router();
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware.js");
const {
  uploadPhoto,
  productImgResize,
} = require("../middlewares/uploadImages");

router.post(
  "/",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 10),
  productImgResize,
  uploadImages
);

router.delete("/delete-img/:id", authMiddleware, isAdmin, deleteImages);

module.exports = router;
