import { Repository } from "typeorm";
import { SalesAd } from "../../entities/salesAd.entity";
import repositories from "../../utils";
import { TSalesAdRequest } from "../../interfaces/salesAd.interface";

interface IEnum {
    engine: "flex" | "hybrid" | "electric"
}

export const seedDb = async () => {
    const modelsBrands = [
        ["volkswagen", "fox"],
        ["chevrolet", "celta"],
        ["nissan", "kwid"],
        ["honda", "civic"],
        ["toyota", "corola"],
        ["hyundai", "azira"]
    ];

    const colors = ["azul", "vermelho", "preto", "branco", "cinza"];
    const engines: IEnum[] = [
        {engine: "flex"}, 
        {engine: "hybrid"}, 
        {engine: "electric"}
    ];

    const makeModelBrand = () => {
        const modelBrand = modelsBrands[Math.floor((Math.random() * (modelsBrands.length)))];
        console.log(modelBrand);
        return [modelBrand[0], modelBrand[1]];
    };

    const saleAdRepo: Repository<SalesAd> = repositories.salesAdRepo;
    const arrayLength: number = 48;

    const array = Array.from(Array(arrayLength));

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for(const index of array) {
        const saleData: TSalesAdRequest = {

            model: makeModelBrand()[0],
            brand: makeModelBrand()[1],
            year: Math.floor((Math.random() * (2022 - 2013) + 2013)).toString(),
            mileage: Math.floor(Math.random() * 100000),
            engine: engines[Math.floor(Math.random() * (engines.length))].engine,
            price: Math.floor(Math.random() * (500000 - 10000) + 10000),
            color: colors[Math.floor(Math.random() * (colors.length))],
            isGoodPrice: true,
            description: "Lorem Ipsum",
            status: true
        };
        const newSaleAd = saleAdRepo.create(saleData);
        await saleAdRepo.save(newSaleAd);
    }
};
