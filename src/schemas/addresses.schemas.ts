import { z } from "zod";

const addressSchema = z.object({
    cep: z.string().max(8),
    city: z.string().max(255),
    street: z.string().max(255),
    addressNumber: z.number(),
    addressComplement: z.string().nullish(),
});

const addresses = {
    addressSchema,
};

export default addresses;
