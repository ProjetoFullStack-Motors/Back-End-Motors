import { Router } from "express";

import controllers from "../controllers";
import schemas from "../schemas";
import middlewares from "../middlewares";

const salesAd: Router = Router();

salesAd.post(
    "",
    middlewares.validateSchema(schemas.salesAd.request),
    controllers.salesAd.create
);
salesAd.get("", controllers.salesAd.readAll);
salesAd.get("/:id", middlewares.existsSalesAdId, controllers.salesAd.readById);
salesAd.patch("/:id", controllers.salesAd.updateById);
salesAd.delete(
    "/:id",
    middlewares.existsSalesAdId,
    controllers.salesAd.deleteById
);

salesAd.post("/:id/images", middlewares.existsSalesAdId, controllers.salesAd.createImage);
salesAd.patch("/:id/images/:imageId", controllers.salesAd.updateImageById);

export default salesAd;
