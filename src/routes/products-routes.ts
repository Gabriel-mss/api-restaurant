import { ProductController } from "@/controllers/products-controller";
import { Router } from "express";

const productRoutes = Router()
const productsController = new ProductController()

productRoutes.get("/", productsController.index)

export {productRoutes}