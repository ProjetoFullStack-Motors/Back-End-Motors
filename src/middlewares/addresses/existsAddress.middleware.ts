import { NextFunction, Request, Response } from "express";
import repositories from "../../utils";
import { Address } from "../../entities/addresses.entity";

const existsAddress = async (
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
        return res.status(409).json({
            message: "Address already exists",
        });
    }

    return next();
};

export default existsAddress;
