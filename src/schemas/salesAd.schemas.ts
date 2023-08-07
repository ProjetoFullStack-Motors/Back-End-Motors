import { z } from "zod";

const response = z.object({
	id: z.string(),
	brand: z.string(),
	model: z.string(),
	year: z.string(),
	mileage: z.number(),
	engine: z.enum(["flex", "hybrid", "electric"]),
	isGoodPrice: z.boolean(),
	price: z.number(),
	color: z.string(),
	description: z.string(),
	status: z.boolean(),
	createdAt: z.string(),
});

const request = response.omit({ id: true, createdAt: true });

const responseArray = response.array();

const imagesResponse = z.object({
	id: z.string(),
	imageUrl: z.string(),
});

const imagesRequest = imagesResponse.omit({ id: true });

const salesAd = {
	response,
	request,
	responseArray,
	imagesResponse,
	imagesRequest
};

export default salesAd;
