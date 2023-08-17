import nodemailer from "nodemailer";
import { AppError } from "../../../middlewares/shared/handlerErrors.middleware";
import crypto from "crypto";
import repositories from "../../../utils";
import { User } from "../../../entities/users.entity";
import { TUserEmailData } from "../../../interfaces/users.interface";
import "dotenv/config";


const recoverPassword = async ( userEmail: TUserEmailData): Promise<void> => {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

    const findUser: User | null = await repositories.usersRepo.findOneBy({
        email: userEmail.email,
    });

    if (!findUser) {
        throw new AppError("Email not found", 401);
    }

    const transport = nodemailer.createTransport({
        service: process.env.SERVICE,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    transport.verify()
        .then(console.log)
        .catch(() => {
            throw new AppError("Fail to send mail", 404);
        });

    const newPassword = crypto.randomBytes(4).toString("hex");

    transport
        .sendMail({
            from: "Adminstrador <emailapiprojecttest@gmail.com>",
            to: userEmail.email,
            subject: "Recuperação de senha",
            html: `<p>Olá, segue senha de recuperação: ${newPassword}</p><br/><a href="http://localhost:3000/login">Página Login</a>`,
        })
        .then(async () => {
            const passwordData = {
                password: newPassword,
            };

            //criar o service de update futuramente
            const newUserData: User = repositories.usersRepo.create({
                ...findUser,
                ...passwordData
            });

            await repositories.usersRepo.save(newUserData);
        })
        .catch(() => {
            throw new AppError("Fail to send mail", 404);
        });

    return;
};

export default recoverPassword;