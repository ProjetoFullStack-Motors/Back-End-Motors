import { Router } from "express";
import controllers from "../controllers";
import middlewares from "../middlewares";
import schemas from "../schemas";

const addresses: Router = Router();

addresses.patch(
    "",
    middlewares.ensureAuth,
    middlewares.validateSchema(schemas.addresses.addressUpdateSchema),
    middlewares.existsAddress,
    controllers.addresses.update
);

export default addresses;
