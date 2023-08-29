import SaleComments from "../../entities/salesComments.entity";
import {
    TCommentRequest,
    TCommentResponse,
} from "../../interfaces/salesComments.interfaces";
import salesCommentsSchema from "../../schemas/salesComments.schemas";
import repositories from "../../utils";

const editComment = async (
    id: string,
    data: TCommentRequest
): Promise<TCommentResponse> => {
    let comment: SaleComments | null = await repositories.commentsRepo.findOne({
        where: {
            id: id,
        },
        relations: {
            salesAd: {
                user: true,
            },
            user: true,
        },
    });

    comment = {
        ...comment!,
        ...data,
    };

    const treatedComment: TCommentResponse =
        salesCommentsSchema.response.parse(comment);

    await repositories.commentsRepo.save(treatedComment);

    return treatedComment;
};

export default editComment;
