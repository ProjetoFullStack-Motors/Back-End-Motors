import { NextFunction, Request, Response } from "express";
import repositories from "../../utils";
import { Address } from "../../entities/addresses.entity";

const existsAddress = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    let cep: string;
    let street: string;
    let addressNumber: number;

    if (req.method === "POST") {
        cep = req.body.address.cep;
        street = req.body.address.street;
        addressNumber = req.body.address.addressNumber;
    } else {
        cep = req.body.cep;
        street = req.body.street;
        addressNumber = req.body.addressNumber;
    }

    const address: Address | null = await repositories.addressesRepo.findOne({
        where: {
            street: street,
            addressNumber: addressNumber,
            cep: cep,
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
