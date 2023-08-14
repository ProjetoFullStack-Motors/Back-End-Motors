import { Router } from "express";
import controllers from "../controllers";
import middlewares from "../middlewares";
import schemas from "../schemas";

const users: Router = Router();

users.post(
    "",
    middlewares.validateSchema(schemas.users.userRequestSchema),
    middlewares.existsUserInfosMiddleware,
    middlewares.existsAddressMiddleware,
    controllers.users.create
);

export default users;
