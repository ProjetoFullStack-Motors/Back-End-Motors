import { Router } from "express";

import controllers from "../controllers";
import schemas from "../schemas";
import middlewares from "../middlewares";
import seedController from "../database/seed/seed.controller";
// import seedController from "../database/seed/seed.controller";

const salesAd: Router = Router();

salesAd.post(
    "",
    middlewares.ensureAuth,
    middlewares.ensureIsSeller,
    middlewares.validateSchema(schemas.salesAd.request),
    controllers.salesAd.create
);
salesAd.post(
    "/seed",
    middlewares.ensureAuth,
    middlewares.ensureIsSeller,
    seedController
);

salesAd.get("", middlewares.paginateSalesAd, controllers.salesAd.readAll);
salesAd.post(
    "/filter",
    middlewares.paginateSalesAd,
    controllers.salesAd.filterReadAll
);
salesAd.get("/values", controllers.salesAd.findExistentValues);
salesAd.get("/:id", middlewares.existsSalesAdId, controllers.salesAd.readById);
salesAd.put(
    "/:id",
    middlewares.ensureAuth,
    middlewares.existsSalesAdId,
    middlewares.ensureIsOwner,
    middlewares.validateSchema(schemas.salesAd.update),
    controllers.salesAd.updateById
);
salesAd.delete(
    "/:id",
    middlewares.ensureAuth,
    middlewares.existsSalesAdId,
    middlewares.ensureIsOwner,
    controllers.salesAd.deleteById
);

salesAd.get(
    "/users/:id",
    middlewares.paginateSalesAd,
    controllers.salesAd.retrieveSalesByUserId
);

export default salesAd;
