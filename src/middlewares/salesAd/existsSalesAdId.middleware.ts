import { NextFunction, Request, Response } from "express";

import { TSalesAdResponse } from "../../interfaces/salesAd.interface";
import repositories from "../../utils";
import { AppError } from "../shared/handlerErrors.middleware";

const existsSalesAdId = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<TSalesAdResponse | void> => {
    const salesAdId: string = req.params.id;

    const salesAd = await repositories.salesAdRepo.findOneBy({
        id: salesAdId
    });

    if (!salesAd) throw new AppError("SalesAd not Found!", 404);

    return next();
};

export default existsSalesAdId;
