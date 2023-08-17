import { z } from "zod";
import { DeepPartial, FindManyOptions } from "typeorm";

import schemas from "../schemas";
import { SalesAd } from "../entities/salesAd.entity";

type TSalesAdResponse = z.infer<typeof schemas.salesAd.response>;

type TSalesAdResponseArray = z.infer<typeof schemas.salesAd.responseArray>;

type TSalesAdRequest = z.infer<typeof schemas.salesAd.request>;

type TSalesAdUpdate = DeepPartial<TSalesAdRequest>;

type TSalesImagesResponse = z.infer<typeof schemas.salesAd.imagesResponse>;

type TSalesImagesRequest = z.infer<typeof schemas.salesAd.imagesRequest>;

type TSalesWithImages = {
    id: string;
    brand: string;
    model: string;
    year: string;
    mileage: number;
    engine: string;
    isGoodPrice: boolean;
    price: number;
    color: string;
    description: string;
    status: boolean;
    created_at: string;
    images: TSalesImagesResponse[];
};

type TListArgument = {
    objectToListing: FindManyOptions;
    page: number;
    perPage: number;
};

type TPaginateSalesAdResponse = {
    prevPage: string | null;
    nextPage: string | null;
    count: number;
    data: SalesAd[];
};

type TPriceRange = {
    minPrice: number;
    maxPrice: number;
};

type TMileageRange = {
    minMileage: number;
    maxMileage: number;
};

type TFilterSalesAd = {
    brand?: string | null | undefined;
    model?: string | null | undefined;
    color?: string | null | undefined;
    year?: string | null | undefined;
    engine?: string | null | undefined;
    rangePrice?: TPriceRange | null | undefined;
    rangeMileage?: TMileageRange | null | undefined;
};

export {
    TSalesAdResponse,
    TSalesAdRequest,
    TSalesAdUpdate,
    TSalesImagesResponse,
    TSalesImagesRequest,
    TSalesAdResponseArray,
    TListArgument,
    TPaginateSalesAdResponse,
    TFilterSalesAd,
    TSalesWithImages,
};
