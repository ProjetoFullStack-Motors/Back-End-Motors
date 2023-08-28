import { SalesAd, SalesImages } from "../../entities/salesAd.entity";
import {
    TSalesAdUpdate,
    TSalesWithImages,
} from "../../interfaces/salesAd.interface";
import repositories from "../../utils";

const updateById = async (
    salesAdId: string,
    salesAdData: TSalesAdUpdate
): Promise<TSalesWithImages> => {
    const { salesImages, ...salesAd } = salesAdData;

    // if (salesImages) {
    //     const salesImagesRepo = await repositories.salesImageRepo
    //         .createQueryBuilder()
    //         .select("salesImages.imageUrl")
    //         .from(SalesImages, "salesImages")
    //         .where("SalesImages.salesAdId = :id", { id: salesAdId })
    //         .getMany();

    //     console.log(salesImagesRepo);

    //     for (const { imageUrl } of salesImages) {
    //         await repositories.salesImageRepo.update(salesAdId, {
    //             imageUrl: imageUrl!,
    //         });
    //     }
    // }

    await repositories.salesAdRepo.update({ id: salesAdId }, salesAd);

    const updatedSales = await repositories.salesAdRepo.findOne({
        relations: {
            salesImages: true,
        },
        where: {
            id: salesAdId,
        },
    });

    return updatedSales!;
};

export default updateById;
