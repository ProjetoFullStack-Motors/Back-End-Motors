import { SalesAd } from "../../entities/salesAd.entity";
import repositories from "../../utils";

const readById = async (salesAdId: string): Promise<SalesAd> => {
    let saleAd: SalesAd | null = await repositories.salesAdRepo.findOne({
        where: {
            id: salesAdId,
        },
        relations: {
            salesImages: true
        },
        order: {
            salesImages: {
                created_at: "ASC"
            }
        }
    });

    saleAd = {
        ...saleAd!,
        price: saleAd!.price / 100
    };

    return saleAd; 
};

export default readById;