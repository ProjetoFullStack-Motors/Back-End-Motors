import { z } from "zod";
import { DeepPartial } from "typeorm";

import schemas from "../schemas";

type TSalesAdResponse = z.infer<typeof schemas.salesAd.response>;

type TSalesAdResponseArray = z.infer<typeof schemas.salesAd.responseArray>

type TSalesAdRequest = z.infer<typeof schemas.salesAd.request>;

type TSalesAdUpdate = DeepPartial<typeof schemas.salesAd.update>;

type TSalesImagesResponse = z.infer<typeof schemas.salesAd.imagesResponse>;

type TSalesImagesRequest = z.infer<typeof schemas.salesAd.imagesRequest>;

export {
    TSalesAdResponse,
    TSalesAdRequest,
    TSalesAdUpdate,
    TSalesImagesResponse,
    TSalesImagesRequest,
    TSalesAdResponseArray,
};
