import { NextFunction, Request, Response } from "express";
import repositories from "../../utils";

const ensureIsOwner = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    const salesAdId: string = req.params.id;
    const userId: string = res.locals.userId;

    const isOwnerSalesAd: boolean = await repositories.salesAdRepo.exist({
        where: {
            id: salesAdId,
            user: {
                id: userId,
            },
        },
    });

    if (!isOwnerSalesAd) {
        return res.status(403).json({ message: "Insufficient permission" });
    }
    return next();
};

export default ensureIsOwner;
