import { z } from "zod";
import schemas from "../schemas";

type TUser = z.infer<typeof schemas.users.userSchema>;

type TUserRequest = z.infer<typeof schemas.users.userRequestSchema>;

type TUserResponse = z.infer<typeof schemas.users.userResponseSchema>;

type TLogin = z.infer<typeof schemas.users.LoginSchema>;

type TUserWithoutAddress = z.infer<typeof schemas.users.userWithoutAddress>;

type TUserWithoutSales = z.infer<typeof schemas.users.userWithoutSales>;

export {
    TUser,
    TUserRequest,
    TUserResponse,
    TLogin,
    TUserWithoutAddress,
    TUserWithoutSales,
};
