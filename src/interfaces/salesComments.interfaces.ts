import { z } from "zod";
import salesCommentsSchema from "../schemas/salesComments.schemas";

type TCommentRequest = z.infer<typeof salesCommentsSchema.request>;

type TCommentResponse = z.infer<typeof salesCommentsSchema.response>;

type TSalesAdComments = z.infer<
    typeof salesCommentsSchema.allSalesAdCommentsSchema
>;

export { TCommentRequest, TCommentResponse, TSalesAdComments };
