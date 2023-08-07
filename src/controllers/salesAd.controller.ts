import { Request, Response } from "express";
import salesAdServices from "../services/salesAd";

const create = async (req: Request, res: Response): Promise<Response> => {
    return await res.json("create controller");
};

const readAll = async (req: Request, res: Response): Promise<Response> => {
    return await res.json("readAll controller");
};

const readById = async (req: Request, res: Response): Promise<Response> => {
    return await res.json("readById controller");
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
    return await res.json("createImage controller");
};

const updateImageById = async (
    req: Request,
    res: Response
): Promise<Response> => {
    return await res.json("updateImageById controller");
};

const salesAd = {
    create,
    readAll,
    readById,
    updateById,
    deleteById,
    createImage,
    updateImageById,
};

export default salesAd;
