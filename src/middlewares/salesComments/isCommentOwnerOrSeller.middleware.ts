import { NextFunction, Request, Response } from "express";
import SaleComments from "../../entities/salesComments.entity";
import repositories from "../../utils";
import { AppError } from "../shared/handlerErrors.middleware";

const isCommentOwnerOrSeller = async (
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> => {
    const commentId: string = request.params.id;
    const userId: string = response.locals.userId;

    const comment: SaleComments | null =
        await repositories.commentsRepo.findOne({
            where: {
                id: commentId,
            },
            relations: {
                user: true,
                salesAd: {
                    user: true,
                },
            },
        });

    if (userId === comment!.salesAd.user.id) {
        return next();
    }

    if (userId !== comment?.user.id) {
        throw new AppError("Is not owner", 403);
    }

    return next();
};

export default isCommentOwnerOrSeller;
