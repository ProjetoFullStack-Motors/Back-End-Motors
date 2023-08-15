import { SalesAd } from "../../entities/salesAd.entity";
import { User } from "../../entities/users.entity";
import { TSalesAdRequest } from "../../interfaces/salesAd.interface";

import repositories from "../../utils";

const create = async (
    salesAdData: TSalesAdRequest,
    id: string
): Promise<SalesAd> => {
    salesAdData = {
        ...salesAdData,
        price: salesAdData.price * 100,
    };
    const user: User | null = await repositories.usersRepo.findOneBy({ id });

    const sales: SalesAd = repositories.salesAdRepo.create(salesAdData);

    await repositories.salesAdRepo.save({ ...sales, user: user! });

    return sales;
};

export default create;
