import { create } from "./createSalesAd.service";
import { readAll } from "./readAllSalesAd.service";
import { readById } from "./readByIdSalesAd.service";
import { updateById } from "./updateSalesAd.service";
import { deleteById } from "./deleteSalesAd.service";
import { createImage } from "./salesImage/createSalesImages.service";
import { updateImageById } from "./salesImage/updateSalesImages.service";

const salesAd = {
	create,
	readAll,
	readById,
	updateById,
	deleteById,
	createImage,
	updateImageById,
};

export default salesAd;
