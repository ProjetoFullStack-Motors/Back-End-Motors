import { Request, Response } from "express";
import seedDb from "./seed.service";

const seedController = async (req: Request, res: Response): Promise<Response> => {
    await seedDb();
    return res.json({message: "Db seeded"});
};

export default seedController;