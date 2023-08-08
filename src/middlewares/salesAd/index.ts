import { existsSalesAdId } from "./existsSalesAdId.middleware";
import { existsSalesImageId } from "./existsSalesImageId.middleware";
import { paginateListMovies } from "./paginate.middleware";

const salesAd = {
    existsSalesAdId,
    existsSalesImageId,
    paginateListMovies
};

export default salesAd;