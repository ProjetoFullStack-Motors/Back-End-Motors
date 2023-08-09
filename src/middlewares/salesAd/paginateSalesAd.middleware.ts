/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { FindManyOptions } from "typeorm";

const paginateSalesAd = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const querys = req.query;
    const queryPage = querys.page;
    
    let page: number = 1;
    const perPage: number = 12;

    if (queryPage) {
        if (+queryPage > 0) {
            page = +queryPage;
        }
    }

    const objectToListing: FindManyOptions = {
        skip: page <= 1 ? 0 : ((page - 1 )*perPage),
        take: perPage
    };

    res.locals.toListing = {
        objectToListing: objectToListing,
        page: page,
        perPage: perPage,
    };

    return next();
};

export default paginateSalesAd;