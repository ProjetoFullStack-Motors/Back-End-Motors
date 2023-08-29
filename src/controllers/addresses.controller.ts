import { Request, Response } from "express";
import services from "../services";

const update = async (req: Request, res: Response): Promise<Response> => {
    const { userId } = res.locals;

    const address = await services.addresses.update(req.body, userId);

    return res.json(address);
};

const addresses = {
    update,
};

export default addresses;
