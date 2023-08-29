import { SalesAd } from "../../entities/salesAd.entity";
import {
    TListArgument,
    TPaginateSalesAd,
    TPaginateSalesAdResponse,
} from "../../interfaces/salesAd.interface";
import schemas from "../../schemas";
import repositories from "../../utils";

const readAll = async (toListing: TListArgument): Promise<TPaginateSalesAd> => {
    let objectToListing = toListing.objectToListing;

    const page = toListing.page;
    const perPage = toListing.perPage;

    objectToListing = {
        relations: {
            user: true,
            salesImages: true,
        },
        ...objectToListing,
    };

    let salesAd: SalesAd[] = await repositories.salesAdRepo.find(
        objectToListing
    );

    salesAd = salesAd.map((saleAd) => {
        return { ...saleAd, price: saleAd.price / 100 };
    });

    const salesAdCount: number = await repositories.salesAdRepo.count();

    const prevPageUrl: string | null = `http://localhost:3000/salesAd?page=${
        page - 1
    }`;
    const nextPageUrl: string | null = `http://localhost:3000/salesAd?page=${
        page + 1
    }`;

    const listSalesAdReturn: TPaginateSalesAdResponse = {
        prevPage: page <= 1 ? null : prevPageUrl,
        nextPage: page * perPage >= salesAdCount ? null : nextPageUrl,
        count: salesAdCount,
        data: salesAd,
    };

    console.log(listSalesAdReturn);

    return schemas.salesAd.paginateSalesAdResponse.parse(listSalesAdReturn);
};

export default readAll;
