import { SalesAd } from "../../entities/salesAd.entity";
import { TSalesAdRequest } from "../../interfaces/salesAd.interface";

import repositories from "../../utils";

export const createSalesAdService = async (
    salesAdData: TSalesAdRequest
): Promise<SalesAd> => {
    const sales: SalesAd = repositories.salesAdRepo.create(salesAdData);

    await repositories.salesAdRepo.save(sales);

    return sales;
};
