import { Router } from "express";
import controllers from "../controllers";

const recoverPass: Router = Router();

recoverPass.post(
    "", controllers.recoverPass.recoverPasswordController
);

export default recoverPass;