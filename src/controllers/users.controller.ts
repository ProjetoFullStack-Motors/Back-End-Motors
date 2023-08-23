import { Request, Response } from "express";
import services from "../services";
import {
    TLogin,
    TUserUdpateRequest,
    TUserWithoutAddress,
} from "../interfaces/users.interface";

const create = async (req: Request, res: Response): Promise<Response> => {
    const user = await services.users.create(req.body);

    return res.status(201).json(user);
};

const login = async (req: Request, res: Response): Promise<Response> => {
    const loginData: TLogin = req.body;

    const token: string = await services.users.login(loginData);

    return res.json({ token });
};

const updateUser = async (req: Request, res: Response): Promise<Response> => {
    const payload: TUserUdpateRequest = req.body;
    const id = req.params.id;
    const user: TUserWithoutAddress = await services.users.update(id, payload);
    return res.json(user);
};

// const delete = async (req: Request, res: Response): Promise<Response> => {};

const users = {
    create,
    login,
    updateUser,
};

export default users;
