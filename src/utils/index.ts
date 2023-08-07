import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";

import { SalesAd } from "../entities/salesAd.entity";

export const salesAdRepo: Repository<SalesAd> = AppDataSource.getRepository(SalesAd);