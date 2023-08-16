import { z } from "zod";
import addresses from "./addresses.schemas";
import salesAd from "./salesAd.schemas";

const userSchema = z.object({
    id: z.string(),
    firstName: z.string().max(255),
    lastName: z.string().max(255),
    email: z.string().email().max(255),
    password: z.string().max(255),
    cpf: z.string().max(11),
    cellphone: z.string().max(14),
    birthdate: z.union([z.date(), z.string()]),
    description: z.string(),
    userImage: z.string().nullish(),
    role: z.enum(["seller", "buyer"]),
    created_at: z.union([z.date(), z.string()]),
    address: addresses.addressSchema,
    sales: z.optional(salesAd.responseArray),
});

const userRequestSchema = userSchema.omit({
    id: true,
    created_at: true,
    sales: true,
});

const userResponseSchema = userSchema.omit({
    password: true,
});

const LoginSchema = z.object({
    email: z.string(),
    password: z.string(),
});

const userWithoutAddress = userSchema.omit({ password: true, address: true });

const userWithoutSales = userResponseSchema.omit({ sales: true });

const users = {
    userSchema,
    userRequestSchema,
    userResponseSchema,
    LoginSchema,
    userWithoutAddress,
    userWithoutSales,
};

export default users;
