import { Request, Response } from "express";
import services from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
    const user = await services.users.create(req.body);

    return res.status(201).json(user);
};

const users = {
    create,
};
export default users;
