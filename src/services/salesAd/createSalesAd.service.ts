import { SalesAd } from "../../entities/salesAd.entity";
import { TSalesAdRequest } from "../../interfaces/salesAd.interface";

import repositories from "../../utils";

export const create = async (
    salesAdData: TSalesAdRequest
): Promise<SalesAd> => {
    salesAdData = {
        ...salesAdData,
        price: salesAdData.price * 100
    };

    const sales: SalesAd = repositories.salesAdRepo.create(salesAdData);

    await repositories.salesAdRepo.save(sales);

    return sales;
};
