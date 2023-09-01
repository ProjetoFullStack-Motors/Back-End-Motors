import { SalesImages } from "../../entities/salesAd.entity";
import repositories from "../../utils";

const deleteSalesImage = async (id: string): Promise<void> => {
    const image: SalesImages | null = await repositories.salesImageRepo.findOne(
        {
            where: {
                id: id,
            },
        }
    );

    await repositories.salesImageRepo.remove(image!);
};

export default deleteSalesImage;
