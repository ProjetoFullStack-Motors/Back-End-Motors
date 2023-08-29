import { SalesAd } from "../../entities/salesAd.entity";
import repositories from "../../utils";

const deleteById = async (salesAdId: string): Promise<void> => {
    const salesAd: SalesAd | null = await repositories.salesAdRepo.findOneBy({
        id: salesAdId,
    });

    await repositories.salesAdRepo.remove(salesAd!);

    return;
};

export default deleteById;
