import { Request, Response } from "express";
import salesAdServices from "../services/salesAd";
import { TSalesAdRequest, TSalesImagesRequest } from "../interfaces/salesAd.interface";
import { SalesAd } from "../entities/salesAd.entity";

const createSalesAdController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const salesAdData: TSalesAdRequest = req.body;

    console.log(salesAdData);

    const newSalesAd = await salesAdServices.createSalesAdService(salesAdData);

    return res.status(201).json(newSalesAd);
};

const readAll = async (req: Request, res: Response): Promise<Response> => {
    const salesAd = await salesAdServices.readAll();

    return res.status(200).json(salesAd);
};

const readById = async (req: Request, res: Response): Promise<Response> => {
    const salesAdId = req.params.id;

    const saleAd: SalesAd = await salesAdServices.readById(salesAdId);

    return res.status(200).json(saleAd);
};

const updateById = async (req: Request, res: Response): Promise<Response> => {
    return await res.json("updateById controller");
};

const deleteById = async (req: Request, res: Response): Promise<Response> => {
    const salesAdId: string = req.params.id;

    await salesAdServices.deleteById(salesAdId);

    return res.status(204).send();
};

const createImage = async (req: Request, res: Response): Promise<Response> => {
    const imageData: TSalesImagesRequest = req.body;
    const salesAdId = req.params.id;

    await salesAdServices.createImage(imageData, salesAdId);

    return res.status(201).json({ message: "Image created" });
};

const updateImageById = async (
    req: Request,
    res: Response
): Promise<Response> => {
    return await res.json("updateImageById controller");
};

const salesAd = {
    createSalesAdController,
    readAll,
    readById,
    updateById,
    deleteById,
    createImage,
    updateImageById,
};

export default salesAd;
