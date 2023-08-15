import { Router } from "express";

import controllers from "../controllers";
import schemas from "../schemas";
import middlewares from "../middlewares";
import seedController from "../database/seed/seed.controller";

const salesAd: Router = Router();

salesAd.post(
    "",
    middlewares.ensureAuth,
    middlewares.ensureIsSeller,
    middlewares.validateSchema(schemas.salesAd.request),
    controllers.salesAd.create
);
salesAd.post("/seed", seedController);
salesAd.get("", middlewares.paginateSalesAd, controllers.salesAd.readAll);
salesAd.post(
    "/filter",
    middlewares.paginateSalesAd,
    controllers.salesAd.filterReadAll
);
salesAd.get("/values", controllers.salesAd.findExistentValues);
salesAd.get("/:id", middlewares.existsSalesAdId, controllers.salesAd.readById);
salesAd.patch(
    "/:id",
    middlewares.existsSalesAdId,
    middlewares.validateSchema(schemas.salesAd.update),
    controllers.salesAd.updateById
);
salesAd.delete(
    "/:id",
    middlewares.existsSalesAdId,
    controllers.salesAd.deleteById
);

salesAd.post(
    "/:id/images",
    middlewares.existsSalesAdId,
    controllers.salesAd.createImage
);
salesAd.patch(
    "/:id/images/:imageId",
    middlewares.existsSalesAdId,
    middlewares.existsSalesImageId,
    middlewares.validateSchema(schemas.salesAd.imagesRequest),
    controllers.salesAd.updateImageById
);

export default salesAd;
