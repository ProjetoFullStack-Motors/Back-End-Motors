import { NextFunction, Request, Response } from "express";
import repositories from "../../utils";

const existsSalesImageId = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    const salesAdId: string = req.params.id;
    const salesImageId: string = req.params.imageId;

    const salesImage = await repositories.salesImageRepo.findOne({
        where: {
            id: salesImageId,
        },
        relations: {
            salesAd: true,
        },
    });

    if (!salesImage) {
        return res.status(404).json({
            message: "Sales image not found!",
        });
    }

    if (salesImage.salesAd.id !== salesAdId) {
        return res.status(403).json({
            message: "Image not related to Sale Ad",
        });
    }

    return next();
};

export default existsSalesImageId;
