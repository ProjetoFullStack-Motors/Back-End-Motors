import { z } from "zod";
import { DeepPartial } from "typeorm";

import schemas from "../schemas";

type TSalesAdResponse = z.infer<typeof schemas.salesAd.response>;

type TSalesAdRequest = z.infer<typeof schemas.salesAd.request>;

type TSalesAdUpdate = DeepPartial<TSalesAdRequest>;

export { TSalesAdResponse, TSalesAdRequest, TSalesAdUpdate };
