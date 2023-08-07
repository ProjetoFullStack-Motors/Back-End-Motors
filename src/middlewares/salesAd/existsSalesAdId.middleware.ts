import { NextFunction, Request, Response } from "express";

import { TSalesAdResponse } from "../../interfaces/salesAd.interface";

export const existsSalesAdId = (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<TSalesAdResponse | void> => {
    return;
};
