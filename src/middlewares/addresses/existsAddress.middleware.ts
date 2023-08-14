import { NextFunction, Request, Response } from "express";
import repositories from "../../utils";
import { AppError } from "../shared/handlerErrors.middleware";
import { Address } from "../../entities/addresses.entity";

const existsAddressMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    const { street, addressNumber } = req.body.address;

    const address: Address | null = await repositories.addressesRepo.findOne({
        where: {
            street: street,
            addressNumber: addressNumber,
        },
    });

    if (address) {
        throw new AppError("Address already exists", 409);
    }

    return next();
};

export default existsAddressMiddleware;
