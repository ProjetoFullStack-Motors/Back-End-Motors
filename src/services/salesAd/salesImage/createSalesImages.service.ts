import { SalesAd, SalesImages } from "../../../entities/salesAd.entity";
import { TSalesImagesRequest } from "../../../interfaces/salesAd.interface";
import repositories from "../../../utils";

const createImage = async (salesAdData: TSalesImagesRequest, salesAdId: string): Promise<SalesImages> => {

    const sales: SalesAd | null = await repositories.salesAdRepo.findOneBy(
        { 
            id: salesAdId 
        });
    
    const image: SalesImages = repositories.salesImageRepo.create({
        ...salesAdData,
        salesAd: sales!,
    });
    
    await repositories.salesImageRepo.save(image);

    return image;
};

export default createImage;