import { z } from "zod";
import addresses from "./addresses.schemas";

const userSchema = z.object({
    id: z.string(),
    firstName: z.string().max(255),
    lastName: z.string().max(255),
    email: z.string().email().max(255),
    password: z.string().max(255),
    cpf: z.string().max(11),
    cellphone: z.string().max(14),
    description: z.string(),
    userImage: z.string(),
    role: z.enum(["seller", "buyer"]),
    created_at: z.union([z.date(), z.string()]),
    address: addresses.addressSchema,
});

const userRequestSchema = userSchema.omit({
    id: true,
    created_at: true,
});

const userResponseSchema = userSchema.omit({
    password: true,
});

const users = {
    userSchema,
    userRequestSchema,
    userResponseSchema,
};

export default users;
