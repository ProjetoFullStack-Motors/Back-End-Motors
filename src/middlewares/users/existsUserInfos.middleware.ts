import { NextFunction, Request, Response } from "express";
import repositories from "../../utils";
import { User } from "../../entities/users.entity";

const existsUserInfos = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    const { email, cpf, cellphone } = req.body;

    const { id } = req.params;

    const userEmail: User | null = email
        ? await repositories.usersRepo.findOneBy({ email })
        : null;
    const userCpf: User | null = cpf
        ? await repositories.usersRepo.findOneBy({ cpf })
        : null;
    const userCell: User | null = cellphone
        ? await repositories.usersRepo.findOneBy({ cellphone })
        : null;

    if (userEmail && id !== userEmail.id) {
        return res.status(409).json({
            message: "Email already exists",
        });
    } else if (userCell && id !== userCell.id) {
        return res.status(409).json({
            message: "Cellphone already exists",
        });
    } else if (userCpf && id !== userCpf.id) {
        return res.status(409).json({
            message: "CPF already exists",
        });
    }

    return next();
};

export default existsUserInfos;
