import { SalesAd } from "../../entities/salesAd.entity";
import { TSalesAdComments } from "../../interfaces/salesComments.interfaces";
import salesCommentsSchema from "../../schemas/salesComments.schemas";
import repositories from "../../utils";

const getAllSalesAdComments = async (id: string): Promise<TSalesAdComments> => {
    const saleAd: SalesAd | null = await repositories.salesAdRepo.findOne({
        where: {
            id: id,
        },
        relations: {
            user: true,
            comments: {
                user: true,
            },
        },
    });

    const treatedSalesAd: TSalesAdComments =
        salesCommentsSchema.allSalesAdCommentsSchema.parse(saleAd);

    return treatedSalesAd;
};

export default getAllSalesAdComments;
