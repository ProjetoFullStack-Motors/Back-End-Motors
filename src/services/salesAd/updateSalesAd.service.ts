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
    console.log(salesImages);

    if (Array.isArray(salesImages)) {
        for (const { id, imageUrl } of salesImages) {
            console.log(id, imageUrl);
            await repositories.salesImageRepo.update(
                { id: id! },
                {
                    imageUrl: imageUrl!,
                }
            );
        }
    }

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
