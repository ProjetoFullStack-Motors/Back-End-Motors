import {
    TCommentRequest,
    TCommentResponse,
} from "../../interfaces/salesComments.interfaces";
import { User } from "../../entities/users.entity";
import repositories from "../../utils";
import { SalesAd } from "../../entities/salesAd.entity";

import salesCommentsSchema from "../../schemas/salesComments.schemas";

const createComment = async (
    data: TCommentRequest,
    salesAdId: string,
    userId: string
): Promise<TCommentResponse> => {
    const user: User | null = await repositories.usersRepo.findOne({
        where: {
            id: userId,
        },
    });

    const salesAd: SalesAd | null = await repositories.salesAdRepo.findOne({
        where: {
            id: salesAdId,
        },
        relations: {
            user: true,
        },
    });

    const newComment = repositories.commentsRepo.create({
        ...data,
        user: user!,
        salesAd: salesAd!,
    });

    const treatedNewComment = salesCommentsSchema.response.parse(newComment);

    await repositories.commentsRepo.save(newComment);

    return treatedNewComment;
};

export default createComment;
