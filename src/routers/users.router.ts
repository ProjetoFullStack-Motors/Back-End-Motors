import { Router } from "express";
import controllers from "../controllers";
import middlewares from "../middlewares";
import schemas from "../schemas";

const users: Router = Router();

users.post(
    "",
    middlewares.validateSchema(schemas.users.userRequestSchema),
    middlewares.existsUserInfos,
    middlewares.existsAddress,
    controllers.users.create
);

users.post(
    "/login",
    middlewares.validateSchema(schemas.users.LoginSchema),
    controllers.users.login
);

users.patch(
    "/update/:id",
    middlewares.validateSchema(schemas.users.userUdpateSchema),
    controllers.users.updateUser
);

users.delete(
    "/delete/:id",
    controllers.users.deleteUser
);

export default users;
