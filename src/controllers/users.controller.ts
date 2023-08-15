import { Request, Response } from "express";
import services from "../services";
import { TLogin } from "../interfaces/users.interface";

const create = async (req: Request, res: Response): Promise<Response> => {
    const user = await services.users.create(req.body);

    return res.status(201).json(user);
};

const login = async (req: Request, res: Response): Promise<Response> => {
    const loginData: TLogin = req.body;

    const token: string = await services.users.login(loginData);

    return res.json({ token });
};

const retrieveUserSales = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const id = req.params.id;

    const user = await services.users.retrieveUserSales(id);

    return res.json(user);
};

const users = {
    create,
    login,
    retrieveUserSales,
};
export default users;
