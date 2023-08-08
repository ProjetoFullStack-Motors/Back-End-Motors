import { SalesAd } from "../../entities/salesAd.entity";
import { AppError } from "../../middlewares/shared/handlerErrors.middleware";
import repositories from "../../utils";

export const readAll = async (): Promise<SalesAd[]> => {
    const salesAd: SalesAd[] = await repositories.salesAdRepo.find({
        relations: {
            salesImages: true,
        },
        order: {
            salesImages: {
                created_at: "ASC"
            }
        }
    });

    if (!salesAd) {
        throw new AppError("SalesAd not found", 404);
    }

    return salesAd;
};