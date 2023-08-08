import { z } from "zod";
import { Engine } from "../entities/salesAd.entity";

const response = z.object({
    id: z.string(),
    brand: z.string().max(255),
    model: z.string().max(255),
    year: z.string(),
    mileage: z.number(),
    engine: z.nativeEnum(Engine),
    isGoodPrice: z.boolean(),
    price: z.number(),
    color: z.string().max(255),
    description: z.string(),
    status: z.boolean().default(true),
    created_at: z.bigint(),
});

const request = response.omit({
    id: true,
    created_at: true,
});

const responseArray = response.array();

const update = z.object({
    price: z.number(),
    color: z.string(),
    description: z.string(),
    mileage: z.number(),
    status: z.boolean(),
}).partial();

const imagesResponse = z.object({
    id: z.string(),
    imageUrl: z.string(),
    principal: z.boolean(),
    createdAt: z.string(),
});

const imagesRequest = imagesResponse.omit({ id: true, createdAt: true });

const salesAd = {
    response,
    responseArray,
    request,
    update,
    imagesResponse,
    imagesRequest,
};

export default salesAd;
