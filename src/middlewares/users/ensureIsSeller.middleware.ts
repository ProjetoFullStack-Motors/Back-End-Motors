import { NextFunction, Request, Response } from "express";

const ensureIsSeller = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    const role = res.locals.roleUser;

    if (role !== "seller") {
        return res.status(401).json({
            message: "You dont't have permission",
        });
    }

    return next();
};

export default ensureIsSeller;
