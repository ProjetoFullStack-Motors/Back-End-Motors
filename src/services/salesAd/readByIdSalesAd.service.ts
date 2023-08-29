import { SalesAd } from "../../entities/salesAd.entity";
import { TSalesAdResponseId } from "../../interfaces/salesAd.interface";
import schemas from "../../schemas";
import repositories from "../../utils";

const readById = async (salesAdId: string): Promise<TSalesAdResponseId> => {
    let saleAd: SalesAd | null = await repositories.salesAdRepo.findOne({
        where: {
            id: salesAdId,
        },
        relations: {
            salesImages: true,
            user: true,
            comments: true,
        },
        order: {
            salesImages: {
                created_at: "ASC",
            },
        },
    });

    saleAd = {
        ...saleAd!,
        price: saleAd!.price / 100,
    };

    console.log(saleAd);

    return schemas.salesAd.responseWithoutPass.parse(saleAd);
};

export default readById;
