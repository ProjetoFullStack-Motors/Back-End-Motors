/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { FindManyOptions } from "typeorm";

export const paginateListMovies = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const querys = req.query;
    
    let page: number = 1;
    let perPage: number = 12;

    const queryPage = querys.page;
    const queryPerPage = querys.perPage;

    if (queryPage && !queryPerPage) {
        if (+queryPage > 0) {
            page = +queryPage;
        }
    }
    if (!queryPage && queryPerPage) {
        if (+queryPerPage > 0 && +queryPerPage <= 5) {
            perPage = +queryPerPage;
        }
    }
    if (queryPage && queryPerPage) {
        if (+queryPerPage > 0 && +queryPerPage <= 5) {
            perPage = +queryPerPage;
        }
        if (+queryPage > 0) {
            page = +queryPage;
        }
    }

    const objectoToListing: FindManyOptions = {
        skip: page <= 1 ? 0 : ((page - 1 )*perPage),
        take: perPage > 12 ? 12 : perPage
    };

    res.locals.toListing = {
        objectToListing: objectoToListing,
        page: page,
        perPage: perPage
    };

    return next();
};