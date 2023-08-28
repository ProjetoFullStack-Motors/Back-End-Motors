import { z } from "zod";
import schemas from "./index";

const response = z.object({
    id: z.string(),
    comment: z.string(),
    created_at: z.string(),
    salesAd: schemas.salesAd.response,
    user: schemas.users.userWithoutAddress,
});

const request = response.omit({
    id: true,
    created_at: true,
    salesAd: true,
    user: true,
});

const salesCommentsSchema = {
    response,
    request,
};

export default salesCommentsSchema;
