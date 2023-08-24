import { z } from "zod";

export const addressSchema = z.object({
    id: z.string(),
    cep: z.string().max(8),
    state: z.string().max(2),
    city: z.string().max(255),
    street: z.string().max(255),
    addressNumber: z.number(),
    addressComplement: z.string().nullish(),
    created_at: z.union([z.date(), z.string()]),
});

const addressRequestSchema = addressSchema.omit({ id: true, created_at: true });

const addressUpdateSchema = addressRequestSchema.partial();

const addresses = {
    addressSchema,
    addressUpdateSchema,
    addressRequestSchema,
};

export default addresses;
