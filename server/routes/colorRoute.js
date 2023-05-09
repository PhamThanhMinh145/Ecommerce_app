const express = require('express');
const { createColor, updateColor, deleteColor, getColor, getallColor } = require('../controller/colorController');
const router = express.Router();
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware.js");

router.post('/',authMiddleware, isAdmin, createColor);
router.put('/:id',authMiddleware, isAdmin, updateColor);
router.delete('/:id',authMiddleware, isAdmin, deleteColor);
router.get('/:id', getColor);
router.get('/', getallColor);






module.exports = router;
