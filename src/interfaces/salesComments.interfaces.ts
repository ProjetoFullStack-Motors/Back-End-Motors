import { z } from "zod";
import schemas from "../schemas";

type TCommentRequest = z.infer<typeof schemas.salesCommentsSchema.request>;

type TCommentResponse = z.infer<typeof schemas.salesCommentsSchema.response>;

export { TCommentRequest, TCommentResponse };
