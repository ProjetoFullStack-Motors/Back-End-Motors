import { SalesAd } from "../../entities/salesAd.entity";
import { User } from "../../entities/users.entity";
import {
    TSalesAdRequest,
    TSalesImagesResponse,
    TSalesWithImages,
} from "../../interfaces/salesAd.interface";
import schemas from "../../schemas";

import repositories from "../../utils";

const create = async (
    salesAdData: TSalesAdRequest,
    id: string
): Promise<TSalesWithImages> => {
    salesAdData = {
        ...salesAdData,
        price: salesAdData.price * 100,
    };

    const { images, ...salesAdDetails } = salesAdData;

    const user: User | null = await repositories.usersRepo.findOneBy({ id });

    const sales: SalesAd = repositories.salesAdRepo.create(salesAdDetails);
    await repositories.salesAdRepo.save({ ...sales, user: user! });

    const imagesArr: TSalesImagesResponse[] = [];

    if (images && images.length > 0) {
        for (const image of images) {
            const newImage = repositories.salesImageRepo.create(image);

            newImage.salesAd = sales;

            const imageWithoutSales =
                schemas.salesAd.imagesResponse.parse(newImage);

            imagesArr.push(imageWithoutSales);

            await repositories.salesImageRepo.save(newImage);
        }
    }

    return { ...sales, images: imagesArr };
};

export default create;
