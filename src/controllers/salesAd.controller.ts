import { Request, Response } from "express";

import services from "../services";
import {
    TSalesAdRequest,
    TSalesAdResponse,
    TSalesAdUpdate,
    TSalesImagesRequest,
} from "../interfaces/salesAd.interface";
import { SalesAd } from "../entities/salesAd.entity";

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

    const saleAd: SalesAd = await services.salesAd.readById(salesAdId);

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

const createImage = async (req: Request, res: Response): Promise<Response> => {
    const imageData: TSalesImagesRequest = req.body;
    const salesAdId = req.params.id;

    await services.salesAd.createImage(imageData, salesAdId);

    return res.status(201).json({ message: "Image created" });
};

const updateImageById = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const { id, imageId } = req.params;
    const salesImageData: TSalesImagesRequest = req.body;

    const newSaleImage = await services.salesAd.updateImageById(
        id,
        imageId,
        salesImageData
    );

    return res.json(newSaleImage);
};

const salesAd = {
    create,
    readAll,
    readById,
    updateById,
    deleteById,
    createImage,
    updateImageById,
    filterReadAll,
    findExistentValues,
};

export default salesAd;
