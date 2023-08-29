import { Router } from "express";
import middlewares from "../middlewares";
import salesCommentsSchema from "../schemas/salesComments.schemas";
import controllers from "../controllers";

const salesComments: Router = Router();

salesComments.post(
    "/salesAd/:id",
    middlewares.ensureAuth,
    middlewares.validateSchema(salesCommentsSchema.request),
    middlewares.existsSalesAdId,
    controllers.salesCommentsControllers.create
);

salesComments.get(
    "/salesAd/:id",
    middlewares.existsSalesAdId,
    controllers.salesCommentsControllers.getAllSalesAdComments
);

salesComments.patch("/:id", middlewares.ensureAuth);

salesComments.delete("/:id", middlewares.ensureAuth);

export default salesComments;
