import { compareSync } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

import { User } from "../../../entities/users.entity";
import { TLogin } from "../../../interfaces/users.interface";
import { AppError } from "../../../middlewares/shared/handlerErrors.middleware";
import repositories from "../../../utils";

const login = async (loginData: TLogin): Promise<string> => {
    const user: User | null = await repositories.usersRepo.findOneBy({
        email: loginData.email,
    });

    if (!user) {
        throw new AppError("Invalid credentials", 401);
    }

    const verifyPassword: boolean = compareSync(
        loginData.password,
        user.password
    );

    if (!verifyPassword) {
        throw new AppError("Invalid credentials", 401);
    }

    const token: string = jwt.sign(
        { userId: user.id, role: user.role },
        process.env.SECRET_KEY!,
        {
            expiresIn: "1d",
            subject: String(user.id),
        }
    );

    return token;
};

export default login;
