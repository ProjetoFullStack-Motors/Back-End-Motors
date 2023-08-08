import { Between } from "typeorm";

import { TFilterSalesAd, TListArgument, TPaginateSalesAdResponse } from "../../interfaces/salesAd.interface";
import repositories from "../../utils";
import { SalesAd } from "../../entities/salesAd.entity";

export const filter = async (toListing: TListArgument, filterData?: TFilterSalesAd): Promise<TPaginateSalesAdResponse> => {
    let objectToListing = toListing.objectToListing;
    const page = toListing.page;
    const perPage = toListing.perPage;
    let where = {};

    objectToListing = {
        relations: {
            salesImages: true,
        },
        order: {
            salesImages: {
                created_at: "ASC"
            }
        },
        ...objectToListing        
    };
    
    if (filterData) {
        const filterDataArray = Object.entries(filterData);

        filterDataArray.forEach(data => {
            if (data[1] instanceof Object) {
                const rangeArray = Object.entries(data[1]!);
                let fieldName: string | string[] = data[0].split("");
                fieldName = fieldName.splice(5, fieldName.length);
                fieldName = fieldName.join("").toLowerCase();

                where = {
                    ...where,
                    [fieldName]: Between((rangeArray[0][1])  * 100, (rangeArray[1][1]) * 100)
                };
                objectToListing = {...objectToListing, where: where};
            } else {
                where = {
                    ...where,
                    [data[0]]: data[1]
                };
                objectToListing = {...objectToListing, where: where};
            }
        });
    }

    let salesAd: SalesAd[] = await repositories.salesAdRepo.find(objectToListing);

    salesAd = salesAd.map(saleAd => {return {...saleAd, price: saleAd.price / 100};});

    const salesAdCount: number = salesAd.length;

    const prevPageUrl: string | null = `http://localhost:3000/salesAd?page=${page-1}&perPage=${perPage}`;
    const nextPageUrl: string | null = `http://localhost:3000/salesAd?page=${page+1}&perPage=${perPage}`;

    const listSalesAdReturn: TPaginateSalesAdResponse = {
        prevPage: page <= 1 ? null : prevPageUrl,
        nextPage: page * perPage >= salesAdCount ? null : nextPageUrl,
        count: salesAdCount,
        data: salesAd
    };

    return listSalesAdReturn;
};

