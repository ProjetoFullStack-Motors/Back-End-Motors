import { z } from "zod";
import schemas from "../schemas";

type TUser = z.infer<typeof schemas.users.userSchema>;

type TUserRequest = z.infer<typeof schemas.users.userRequestSchema>;

type TUserResponse = z.infer<typeof schemas.users.userResponseSchema>;

export { TUser, TUserRequest, TUserResponse };
