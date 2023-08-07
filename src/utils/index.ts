import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";

import { SalesAd, SalesImages } from "../entities/salesAd.entity";

const salesAdRepo: Repository<SalesAd> = AppDataSource.getRepository(SalesAd);
const salesImageRepo: Repository<SalesImages> = AppDataSource.getRepository(SalesImages);

const repositories = {
	salesAdRepo,
	salesImageRepo
};

export default repositories;