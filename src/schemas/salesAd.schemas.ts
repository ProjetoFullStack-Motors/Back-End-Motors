import { z } from "zod";
import { addressSchema } from "./addresses.schemas";

const onlyNumbers = new RegExp("^[0-9]+$");

const imagesResponse = z.object({
    id: z.string(),
    imageUrl: z.string(),
    created_at: z.string(),
});

const imagesRequest = imagesResponse.omit({ id: true, created_at: true });

const userRes = z.object({
    id: z.string(),
    firstName: z.string().max(255),
    lastName: z.string().max(255),
    userImage: z.string().nullish(),
    description: z.string(),
    address: addressSchema,
});

const userResWithoutAddress = userRes.omit({ address: true });

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
    user: userResWithoutAddress,
});

const request = response.omit({
    id: true,
    created_at: true,
});

const salesAdResponseWithoutUser = response.omit({ user: true });

const responseArray = z.array(response);

const salesAdResponseWithoutUserArray = z.array(salesAdResponseWithoutUser);

const responseWithoutPass = response.extend({
    user: userResWithoutAddress,
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
    prevPage: z.string().nullable(),
    nextPage: z.string().nullable(),
    count: z.number(),
    data: responseArray,
});

const paginateSalesAdWithUser = z.object({
    prevPage: z.string().nullable(),
    nextPage: z.string().nullable(),
    count: z.number(),
    user: userRes,
    data: salesAdResponseWithoutUserArray,
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
    userRes,
    paginateSalesAdWithUser,
};

export default salesAd;
