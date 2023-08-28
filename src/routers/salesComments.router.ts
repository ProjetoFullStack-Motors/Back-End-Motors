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

export default salesComments;
