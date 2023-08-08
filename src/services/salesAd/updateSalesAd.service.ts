import { SalesAd } from "../../entities/salesAd.entity";
import {
    TSalesAdResponse,
    TSalesAdUpdate,
} from "../../interfaces/salesAd.interface";
import schemas from "../../schemas";
import repositories from "../../utils";

export const updateById = async (
    salesAdId: string,
    salesAdData: TSalesAdUpdate
): Promise<TSalesAdResponse | void> => {
    const findSaleAd: SalesAd | null = await repositories.salesAdRepo.findOneBy(
        {
            id: salesAdId,
        }
    );

    const newSaleAd = repositories.salesAdRepo.create({
        ...findSaleAd!,
        ...salesAdData,
    });

    await repositories.salesAdRepo.save(newSaleAd);

    return schemas.salesAd.response.parse(newSaleAd);
};
