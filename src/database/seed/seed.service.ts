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
                        "https://img.elo7.com.br/product/zoom/2610E0D/convite-animado-relampago-mcqueen-carros-2.jpg",
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
