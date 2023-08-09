import { SalesAd } from "../../entities/salesAd.entity";
import {
    TListArgument,
    TPaginateSalesAdResponse,
} from "../../interfaces/salesAd.interface";
import repositories from "../../utils";

const readAll = async (
    toListing: TListArgument
): Promise<TPaginateSalesAdResponse> => {
    let objectToListing = toListing.objectToListing;

    const page = toListing.page;
    const perPage = toListing.perPage;

    objectToListing = {
        relations: {
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

    return listSalesAdReturn;
};

export default readAll;