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

salesComments.patch(
    "/:id",
    middlewares.ensureAuth,
    middlewares.verifyCommentId,
    middlewares.isCommentOwner,
    middlewares.validateSchema(salesCommentsSchema.request),
    controllers.salesCommentsControllers.editComment
);

salesComments.delete(
    "/:id",
    middlewares.ensureAuth,
    middlewares.verifyCommentId,
    middlewares.isCommentOwnerOrSeller,
    controllers.salesCommentsControllers.deleteComment
);

export default salesComments;
