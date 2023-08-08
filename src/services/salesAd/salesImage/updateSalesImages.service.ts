import { SalesImages } from "../../../entities/salesAd.entity";
import {
    TSalesImagesRequest,
    TSalesImagesResponse,
} from "../../../interfaces/salesAd.interface";
import schemas from "../../../schemas";
import repositories from "../../../utils";

export const updateImageById = async (
    salesAdId: string,
    salesImageId: string,
    imageData: TSalesImagesRequest
): Promise<TSalesImagesResponse> => {
    const oldSaleImage: SalesImages | null =
        await repositories.salesImageRepo.findOne({
            where: {
                id: salesImageId,
                salesAd: {
                    id: salesAdId,
                },
            },
        });

    const newSaleImage = repositories.salesImageRepo.create({
        ...oldSaleImage!,
        ...imageData,
    });

    await repositories.salesImageRepo.save(newSaleImage);

    return schemas.salesAd.imagesResponse.parse(newSaleImage);
};
