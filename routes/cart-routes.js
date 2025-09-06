import express from "express";
import cartController from "../controllers/cart-controller.js";
import authMiddleware from "../middlewares/auth-middleware.js";

const router = express.Router();

router.post("/add", authMiddleware, cartController.addToCart);
router.delete("/remove/:productId", authMiddleware, cartController.removeFromCart);
// router.get("/", authMiddleware, cartController.getCart); 

export default router;