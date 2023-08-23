import { Request, Response } from "express";

import services from "../services";
import {
    TSalesAdRequest,
    TSalesAdResponse,
    TSalesAdResponseId,
    TSalesAdUpdate,
} from "../interfaces/salesAd.interface";

const create = async (req: Request, res: Response): Promise<Response> => {
    const salesAdData: TSalesAdRequest = req.body;

    const id = res.locals.userId;

    const newSalesAd = await services.salesAd.create(salesAdData, id);

    return res.status(201).json(newSalesAd);
};

const readAll = async (req: Request, res: Response): Promise<Response> => {
    const toListing = res.locals.toListing;
    const salesAd = await services.salesAd.readAll(toListing);

    return res.status(200).json(salesAd);
};

const filterReadAll = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const filterData = req.body;
    const toListing = res.locals.toListing;
    const salesAd = await services.salesAd.filter(toListing, filterData);

    return res.status(200).json(salesAd);
};

const findExistentValues = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const values = await services.salesAd.findExistentValues();

    return res.json(values);
};

const readById = async (req: Request, res: Response): Promise<Response> => {
    const salesAdId = req.params.id;

    const saleAd: TSalesAdResponseId = await services.salesAd.readById(
        salesAdId
    );

    return res.status(200).json(saleAd);
};

const updateById = async (req: Request, res: Response): Promise<Response> => {
    const salesAdId: string = req.params.id;
    const salesAdData: TSalesAdUpdate = req.body;

    const newSalesAd: TSalesAdResponse = await services.salesAd.updateById(
        salesAdId,
        salesAdData
    );

    return res.json(newSalesAd);
};

const deleteById = async (req: Request, res: Response): Promise<Response> => {
    const salesAdId: string = req.params.id;

    await services.salesAd.deleteById(salesAdId);

    return res.status(204).send();
};

const retrieveSalesByUserId = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const id: string = req.params.id;
    const toListing = res.locals.toListing;

    const sales = await services.salesAd.retrieveSalesByUserId(id, toListing);

    return res.json(sales);
};

const salesAd = {
    create,
    readAll,
    readById,
    updateById,
    deleteById,
    filterReadAll,
    findExistentValues,
    retrieveSalesByUserId,
};

export default salesAd;
