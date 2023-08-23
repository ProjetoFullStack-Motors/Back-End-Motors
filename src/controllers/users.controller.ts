import { Request, Response } from "express";
import services from "../services";
import { TLogin, TUserResponse, TUserUdpateRequest } from "../interfaces/users.interface";

import update from "../services/users/updateUsers.service";
import { User } from "../entities/users.entity";


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

const updateUser = async (req: Request, res: Response): Promise<Response> => {
    const payload: TUserUdpateRequest = req.body;
    const id = req.params.id;
    const user: TUserResponse = await update(id, payload);
    return res.json(user);
};

// const delete = async (req: Request, res: Response): Promise<Response> => {};

const users = {
    create,
    login,
    retrieveUserSales,
    updateUser
};
export default users;
