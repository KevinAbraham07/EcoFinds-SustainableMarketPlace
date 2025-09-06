import dotenv from "dotenv";
import express from "express";
import connectToDb from "./database/database.js";
import authRoutes from "./routes/auth-routes.js";
import cartRoutes from "./routes/cart-routes.js";
import productRoutes from "./routes/product-routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT||3000;

connectToDb();
app.use(express.json());

app.use("/api/auth",authRoutes);
app.use("/api/cart",cartRoutes);
app.use("/api/product",productRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is listening to port ${3000}`);
});




