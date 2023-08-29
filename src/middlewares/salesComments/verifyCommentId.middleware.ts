import { NextFunction, Request, Response } from "express";
import SaleComments from "../../entities/salesComments.entity";
import repositories from "../../utils";
import { AppError } from "../shared/handlerErrors.middleware";

const verifyCommentId = async (
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> => {
    const commentId: string = request.params.id;

    const comment: SaleComments | null =
        await repositories.commentsRepo.findOne({
            where: {
                id: commentId,
            },
        });

    if (!comment) {
        throw new AppError("Not found", 404);
    }

    return next();
};

export default verifyCommentId;
