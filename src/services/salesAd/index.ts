import create from "./createSalesAd.service";
import readAll from "./readAllSalesAd.service";
import readById from "./readByIdSalesAd.service";
import updateById from "./updateSalesAd.service";
import deleteById from "./deleteSalesAd.service";
import createImage from "./salesImage/createSalesImages.service";
import updateImageById from "./salesImage/updateSalesImages.service";
import filter from "./filterSalesAd.service";
import findExistentValues from "./findExistentValues.service";

const salesAd = {
    create,
    readAll,
    readById,
    updateById,
    deleteById,
    createImage,
    updateImageById,
    filter,
    findExistentValues
};

export default salesAd;
