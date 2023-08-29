import { NextFunction, Request, Response } from "express";
import repositories from "../../utils";
import { User } from "../../entities/users.entity";

const existsUserInfos = async (
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
        return res.status(409).json({
            message: "Email, cellphone and CPF already exists",
        });
    } else if (userCell && userEmail) {
        return res.status(409).json({
            message: "Cellphone and CPF already exists",
        });
    } else if (userCpf && userEmail) {
        return res.status(409).json({
            message: "Email and CPF already exists",
        });
    } else if (userCell && userCpf) {
        return res.status(409).json({
            message: "Cellphone and CPF already exists",
        });
    } else if (userEmail) {
        return res.status(409).json({
            message: "Email already exists",
        });
    } else if (userCell) {
        return res.status(409).json({
            message: "Cellphone already exists",
        });
    } else if (userCpf) {
        return res.status(409).json({
            message: "CPF already exists",
        });
    }

    return next();
};

export default existsUserInfos;
