import express from "express";
import authMiddleware from "../middlewares/auth-middleware.js";
import productController from "../controllers/product-controller.js";

const router=express.Router();

router.get('/get', productController.getAllProducts);
router.get('/get/:id', productController.getProductById);


router.post('/add', authMiddleware, productController. addProducts);
router.put('/update/:id', authMiddleware, productController.updateProducts);
router.delete('/delete/:id', authMiddleware, productController.deleteProducts);


export default router;