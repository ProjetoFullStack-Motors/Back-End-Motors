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
    salesImages: z.array(imagesRequest),
});

const request = response.omit({
    id: true,
    created_at: true,
});

const responseArray = z.array(response);

const userRes = z.object({
    firstName: z.string().max(255),
    lastName: z.string().max(255),
    userImage: z.string().nullish(),
    description: z.string(),
});

const responseWithoutPass = response.extend({
    user: userRes,
});

const update = z
    .object({
        price: z.number(),
        color: z.string(),
        description: z.string(),
        mileage: z.number(),
        status: z.boolean(),
    })
    .partial();

const paginateSalesAdResponse = z.object({
    prevPage: z.string().nullish(),
    nextPage: z.string().nullish(),
    count: z.number(),
    data: z.array(responseWithoutPass),
});

const salesAd = {
    response,
    responseArray,
    request,
    update,
    imagesResponse,
    imagesRequest,
    responseWithoutPass,
    paginateSalesAdResponse,
};

export default salesAd;
