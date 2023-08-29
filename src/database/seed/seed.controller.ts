import { Request, Response } from "express";
import seedDb from "./seed.service";

const seedController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const id = res.locals.userId;

    await seedDb(id);
    return res.json({ message: "Db seeded" });
};

export default seedController;
