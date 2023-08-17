import { z } from "zod";

const onlyNumbers = new RegExp("^[0-9]+$");

const imagesResponse = z.object({
    id: z.string(),
    imageUrl: z.string(),
    created_at: z.string(),
});

const imagesRequest = imagesResponse.omit({ id: true, created_at: true });

const response = z.object({
    id: z.string(),
    brand: z.string().max(255),
    model: z.string().max(255),
    year: z.string().min(4).max(4).regex(onlyNumbers),
    mileage: z.number(),
    engine: z.enum(["flex", "hybrid", "electric"]),
    isGoodPrice: z.boolean(),
    price: z.number(),
    color: z.string().max(255),
    description: z.string(),
    status: z.boolean().default(true),
    created_at: z.string(),
    images: z.array(imagesRequest),
});

const request = response.omit({
    id: true,
    created_at: true,
});

const responseArray = response.array();

const update = z
    .object({
        price: z.number(),
        color: z.string(),
        description: z.string(),
        mileage: z.number(),
        status: z.boolean(),
    })
    .partial();

const salesAd = {
    response,
    responseArray,
    request,
    update,
    imagesResponse,
    imagesRequest,
};

export default salesAd;
