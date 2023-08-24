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
    console.log(payload);

    const id = req.params.id;
    const user: TUserWithoutAddress = await services.users.update(id, payload);
    return res.json(user);
};

const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    const id = req.params.id;
    await services.users.deleteUser(id);
    return res.json();
};

const users = {
    create,
    login,
    updateUser,
    deleteUser,
};

export default users;
