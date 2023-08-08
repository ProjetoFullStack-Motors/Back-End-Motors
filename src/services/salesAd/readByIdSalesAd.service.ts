import { SalesAd } from "../../entities/salesAd.entity";
import repositories from "../../utils";

export const readById = async (salesAdId: string): Promise<SalesAd> => {
    const saleAd: SalesAd | null = await repositories.salesAdRepo.findOne({
        where: {
            id: salesAdId,
        },
        relations: {
            salesImages: true
        }
    });

    return saleAd!; 
};