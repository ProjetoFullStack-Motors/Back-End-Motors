import { NextFunction, Request, Response } from "express";
import repositories from "../../utils";
import { AppError } from "../shared/handlerErrors.middleware";
import { User } from "../../entities/users.entity";

const existsUserInfosMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    const { email, cpf, cellphone } = req.body;

    const userEmail: User | null = await repositories.usersRepo.findOneBy({
        email: email,
    });

    const userCpf: User | null = await repositories.usersRepo.findOneBy({
        cpf: cpf,
    });

    const userCell: User | null = await repositories.usersRepo.findOneBy({
        cellphone: cellphone,
    });

    if (userEmail && userCell && userCpf) {
        throw new AppError("Email, cellphone and CPF already exists", 409);
    } else if (userCell && userEmail) {
        throw new AppError("Cellphone and email already exists", 409);
    } else if (userCpf && userEmail) {
        throw new AppError("CPF and email already exists", 409);
    } else if (userCell && userCpf) {
        throw new AppError("Cellphone and CPF already exists", 409);
    } else if (userEmail) {
        throw new AppError("Email already exists", 409);
    } else if (userCell) {
        throw new AppError("Cellphone already exists", 409);
    } else if (userCpf) {
        throw new AppError("CPF already exists", 409);
    }

    return next();
};

export default existsUserInfosMiddleware;
