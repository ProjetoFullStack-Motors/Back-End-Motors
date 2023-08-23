import create from "./createSalesAd.service";
import readAll from "./readAllSalesAd.service";
import readById from "./readByIdSalesAd.service";
import updateById from "./updateSalesAd.service";
import deleteById from "./deleteSalesAd.service";
import filter from "./filterSalesAd.service";
import findExistentValues from "./findExistentValues.service";
import retrieveSalesByUserId from "./retrieveSalesByUserId.service";

const salesAd = {
    create,
    readAll,
    readById,
    updateById,
    deleteById,
    filter,
    findExistentValues,
    retrieveSalesByUserId,
};

export default salesAd;
