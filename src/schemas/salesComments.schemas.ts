import { z } from "zod";

const userSchema = z.object({
    id: z.string(),
    firstName: z.string().max(255),
    lastName: z.string().max(255),
    email: z.string().email().max(255),
    cpf: z.string().max(11),
    cellphone: z.string().max(14),
    birthdate: z.union([z.date(), z.string()]),
    description: z.string(),
    userImage: z.string().nullish(),
    role: z.enum(["seller", "buyer"]).or(z.string()),
    created_at: z.string(),
});

const salesSchema = z.object({
    id: z.string(),
    brand: z.string().max(255),
    model: z.string().max(255),
    year: z.string().min(4).max(4),
    mileage: z.number(),
    engine: z.enum(["flex", "hybrid", "electric"]).or(z.string()),
    isGoodPrice: z.boolean(),
    price: z.number(),
    color: z.string().max(255),
    description: z.string(),
    status: z.boolean().default(true),
    created_at: z.string(),
    user: userSchema,
});

const response = z.object({
    id: z.string(),
    comment: z.string(),
    created_at: z.string(),
    user: userSchema,
    salesAd: salesSchema,
});

const request = response.omit({
    id: true,
    created_at: true,
    salesAd: true,
    user: true,
});

const commentsWithoutSalesAd = response.omit({ salesAd: true });

const allSalesAdCommentsSchema = salesSchema.extend({
    comments: z.array(commentsWithoutSalesAd),
});

const salesCommentsSchema = {
    response,
    request,
    commentsWithoutSalesAd,
    allSalesAdCommentsSchema,
};

export default salesCommentsSchema;
