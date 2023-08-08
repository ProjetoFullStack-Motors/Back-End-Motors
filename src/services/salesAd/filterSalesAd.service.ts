import { Between } from "typeorm";

import { TFilterSalesAd, TListArgument, TPaginateSalesAdResponse } from "../../interfaces/salesAd.interface";
import repositories from "../../utils";
import { SalesAd } from "../../entities/salesAd.entity";

export const filter = async (toListing: TListArgument, filterData?: TFilterSalesAd): Promise<TPaginateSalesAdResponse> => {
    let objectToListing = toListing.objectToListing;
    const page = toListing.page;
    const perPage = toListing.perPage;

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
        if (filterData.brand) objectToListing = {...objectToListing, where: {brand: filterData.brand}};
        if (filterData.model) objectToListing = {...objectToListing, where: {model: filterData.model}};
        if (filterData.color) objectToListing = {...objectToListing, where: {color: filterData.color}};
        if (filterData.year) objectToListing = {...objectToListing, where: {year: filterData.year}};
        if (filterData.engine) objectToListing = {...objectToListing, where: {engine: filterData.engine}};
        if (filterData.mileageRange) objectToListing = {...objectToListing, where: {mileage: Between(filterData.mileageRange!.minMileage, filterData.mileageRange!.maxMileage)}};
        if (filterData.valueRange) objectToListing = {...objectToListing, where: {price: Between((filterData.valueRange!.minValue)  * 100, (filterData.valueRange!.maxValue ) * 100)}};
    }

    let salesAd: SalesAd[] = await repositories.salesAdRepo.find(objectToListing);

    salesAd = salesAd.map(saleAd => {return {...saleAd, price: saleAd.price / 100};});

    const salesAdCount: number = await repositories.salesAdRepo.count();

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

