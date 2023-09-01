import { NextFunction, Request, Response } from "express";
import { SalesImages } from "../../entities/salesAd.entity";
import repositories from "../../utils";
import { AppError } from "../shared/handlerErrors.middleware";

const ensureImageExists = async (
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> => {
    const imageId: string = request.params.id;

    const image: SalesImages | null = await repositories.salesImageRepo.findOne(
        {
            where: {
                id: imageId,
            },
        }
    );

    if (!image) {
        throw new AppError("Not found", 404);
    }

    return next();
};

export default ensureImageExists;
