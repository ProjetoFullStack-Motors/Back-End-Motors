import { Between } from "typeorm";

import {
    TFilterSalesAd,
    TListArgument,
    TPaginateSalesAd,
    TPaginateSalesAdResponse,
} from "../../interfaces/salesAd.interface";
import repositories from "../../utils";
import { SalesAd } from "../../entities/salesAd.entity";
import schemas from "../../schemas";

const filter = async (
    toListing: TListArgument,
    filterData?: TFilterSalesAd
): Promise<TPaginateSalesAd> => {
    let objectToListing = toListing.objectToListing;
    const objectSkipTake = {
        skip: objectToListing.skip,
        take: objectToListing.take,
    };
    const page = toListing.page;
    const perPage = toListing.perPage;

    objectToListing = {
        relations: {
            salesImages: true,
            user: true,
        },
    };

    if (filterData) {
        let where = {};
        const filterDataArray = Object.entries(filterData);

        filterDataArray.forEach((data) => {
            if (data[1] instanceof Object) {
                const rangeArray = Object.entries(data[1]!);
                let fieldName: string | string[] = data[0].split("");
                fieldName = fieldName.splice(5, fieldName.length);
                fieldName = fieldName.join("").toLowerCase();

                where = {
                    ...where,
                    [fieldName]: Between(
                        rangeArray[0][1] * 100,
                        rangeArray[1][1] * 100
                    ),
                };
                objectToListing = { ...objectToListing, where: where };
            } else {
                where = {
                    ...where,
                    [data[0]]: data[1],
                };
                objectToListing = { ...objectToListing, where: where };
            }
        });
    }

    let salesAd: SalesAd[] = await repositories.salesAdRepo.find(
        objectToListing
    );

    salesAd = salesAd.map((saleAd) => {
        return { ...saleAd, price: saleAd.price / 100 };
    });

    const salesAdCount: number = salesAd.length;

    const paginatedResults = salesAd.slice(
        objectSkipTake.skip,
        objectSkipTake.skip! + objectSkipTake.take!
    );

    const prevPageUrl:
        | string
        | null = `http://localhost:3000/salesAd/filter?page=${page - 1}`;
    const nextPageUrl:
        | string
        | null = `http://localhost:3000/salesAd/filter?page=${page + 1}`;

    const listSalesAdReturn: TPaginateSalesAdResponse = {
        prevPage: page <= 1 ? null : prevPageUrl,
        nextPage: page * perPage >= salesAdCount ? null : nextPageUrl,
        count: salesAdCount,
        data: paginatedResults,
    };

    return schemas.salesAd.paginateSalesAdResponse.parse(listSalesAdReturn);
};

export default filter;
