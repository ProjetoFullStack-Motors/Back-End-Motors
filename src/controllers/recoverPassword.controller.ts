import { Request, Response } from "express";
import services from "../services";
import { TUserEmailData } from "../interfaces/users.interface";

const recoverPasswordController = async (req: Request, res: Response): Promise<Response> => {
    const userEmail: TUserEmailData = req.body;

    await services.users.recoverPassword(userEmail);

    return res.status(200).json("Email sended");
};

const recoverPass = {
    recoverPasswordController,
};

export default recoverPass;