import { NextFunction, Request, Response } from "express";

import { TSalesAdResponse } from "../../interfaces/salesAd.interface";
import repositories from "../../utils";
import { AppError } from "../shared/handlerErrors.middleware";

export const existsSalesImageId = async (
	req: Request,
	res: Response,
	next: NextFunction
): Promise<TSalesAdResponse | void> => {
	const salesAdId: string = req.params.id;
	const salesImageId: string = req.params.imageId;

	const salesImage= await repositories.salesImageRepo.findOne({
		where: {
			id: salesImageId
		}, relations: {
			salesAd: true
		}
	});

	if (!salesImage) throw new AppError("Sales Image not Found!", 404);

	if (salesImage.salesAd.id !== salesAdId) throw new AppError("Image not related to Sale Ad", 403);

	return next();
};
