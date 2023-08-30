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
                        "https://img.freepik.com/fotos-premium/renderizacao-3d-de-um-carro-generico-sem-marca-em-um-ambiente-de-estudio-branco_101266-12914.jpg?w=2000",
                },
                {
                    imageUrl:
                        "https://img.freepik.com/fotos-premium/renderizacao-3d-de-um-carro-generico-sem-marca-em-um-ambiente-de-estudio-branco_101266-13143.jpg",
                },
                {
                    imageUrl:
                        "https://img.freepik.com/fotos-premium/renderizacao-3d-de-um-carro-generico-sem-marca-em-um-ambiente-de-estudio-branco_101266-9474.jpg?w=2000",
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
