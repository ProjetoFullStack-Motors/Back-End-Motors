import { Repository } from "typeorm";
import { SalesAd, SalesImages } from "../../entities/salesAd.entity";
import repositories from "../../utils";
import { TSalesAdRequest } from "../../interfaces/salesAd.interface";
import { array, arrayImages, colors, engines, makeModelBrand } from "./seed.mock";

const seedDb = async () => {

    const saleAdRepo: Repository<SalesAd> = repositories.salesAdRepo;
    const salesImagesRepo: Repository<SalesImages> = repositories.salesImageRepo;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for(const index of array) {
        const modelBrand = makeModelBrand();
        const saleData: TSalesAdRequest = {
            model: modelBrand[0],
            brand: modelBrand[1],
            year: Math.floor((Math.random() * (2022 - 2013) + 2013)).toString(),
            mileage: Math.floor(Math.random() * 100000),
            engine: engines[Math.floor(Math.random() * (engines.length))].engine,
            price: Math.floor(Math.random() * (500000 - 10000) + 10000) * 100,
            color: colors[Math.floor(Math.random() * (colors.length))],
            isGoodPrice: true,
            description: "Lorem Ipsum",
            status: true
        };
        const newSaleAd = saleAdRepo.create(saleData);
        await saleAdRepo.save(newSaleAd);

        for(const obj of arrayImages) {
            if (obj === 0) {
                const image = salesImagesRepo.create({
                    imageUrl: modelBrand[2],
                    principal: true,
                    salesAd: newSaleAd
                });
                await salesImagesRepo.save(image);
            } 

            const image = salesImagesRepo.create({
                imageUrl: modelBrand[2],
                salesAd: newSaleAd
            });
            await salesImagesRepo.save(image);
        }
    }
};

export default seedDb;
