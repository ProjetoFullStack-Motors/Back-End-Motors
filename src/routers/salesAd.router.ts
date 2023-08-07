import { Router } from "express";
import controllers from "../controllers";
import validateSchema from "../middlewares/shared/validateSchema.middleware";
import schemas from "../schemas";

const salesAd: Router = Router();

salesAd.post(
    "",
    validateSchema(schemas.salesAd.request),
    controllers.salesAd.createSalesAdController
);
salesAd.get("", controllers.salesAd.readAll);
salesAd.get("/:id", controllers.salesAd.readById);
salesAd.patch("/:id", controllers.salesAd.updateById);
salesAd.delete("/:id", controllers.salesAd.deleteById);

salesAd.post("/:id/images", controllers.salesAd.createImage);
salesAd.patch("/:id/images/:imageId", controllers.salesAd.updateImageById);

export default salesAd;
