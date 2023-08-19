import { SalesAd } from "../../entities/salesAd.entity";
import repositories from "../../utils";
import { TSalesAdRequest } from "../../interfaces/salesAd.interface";
import { array, colors, engines, makeModelBrand } from "./seed.mock";
import { User } from "../../entities/users.entity";

const seedDb = async (id: string) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const index of array) {
        const modelBrand = makeModelBrand();
        const saleData: TSalesAdRequest = {
            model: modelBrand[0],
            brand: modelBrand[1],
            year: Math.floor(Math.random() * (2022 - 2013) + 2013).toString(),
            mileage: Math.floor(Math.random() * 100000),
            engine: engines[Math.floor(Math.random() * engines.length)].engine,
            price: Math.floor(Math.random() * (500000 - 10000) + 10000) * 100,
            color: colors[Math.floor(Math.random() * colors.length)],
            isGoodPrice: true,
            description: "Lorem Ipsum",
            status: true,
            salesImages: [
                {
                    imageUrl:
                        "data:image/jpeg;base64,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",
                },
                {
                    imageUrl:
                        "https://s2-autoesporte.glbimg.com/2qiUv9SwwaZOp6fvs3GP5EAvtjg=/0x0:1200x801/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2022/3/f/6NM9XsRQGYbW1pQy09lQ/relampago-mcqueen.jpeg",
                },
                {
                    imageUrl:
                        "https://i.ytimg.com/vi/lkn_OjfdZZA/maxresdefault.jpg",
                },
            ],
        };
        const { salesImages, ...salesAdDetails } = saleData;

        const user: User | null = await repositories.usersRepo.findOneBy({
            id,
        });

        const sales: SalesAd = repositories.salesAdRepo.create(salesAdDetails);

        await repositories.salesAdRepo.save({ ...sales, user: user! });
        await repositories.salesAdRepo.save(sales);

        if (salesImages && salesImages.length > 0) {
            for (const image of salesImages) {
                const newImage = repositories.salesImageRepo.create(image);

                newImage.salesAd = sales;

                await repositories.salesImageRepo.save(newImage);
            }
        }

        // for (const obj of arrayImages) {
        //     if (obj === 0) {
        //         const image = salesImagesRepo.create({
        //             imageUrl: modelBrand[2],
        //             principal: true,
        //             salesAd: newSaleAd,
        //         });
        //         await salesImagesRepo.save(image);
        //     }

        //     const image = salesImagesRepo.create({
        //         imageUrl: modelBrand[2],
        //         salesAd: newSaleAd,
        //     });
        //     await salesImagesRepo.save(image);
        // }
    }
};

export default seedDb;
