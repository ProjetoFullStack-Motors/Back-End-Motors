import { NextFunction, Request, Response } from "express";
import repositories from "../../utils";

const existsSalesAdId = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    const salesAdId: string = req.params.id;

    const salesAd = await repositories.salesAdRepo.findOneBy({
        id: salesAdId,
    });

    if (!salesAd) {
        return res.status(404).json({
            message: "SalesAd not found!",
        });
    }

    return next();
};

export default existsSalesAdId;
