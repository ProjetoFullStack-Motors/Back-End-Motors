import existsSalesAdId from "./existsSalesAdId.middleware";
import existsSalesImageId from "./existsSalesImageId.middleware";
import paginateSalesAd from "./paginateSalesAd.middleware";
import ensureIsOwner from "./ensureIsOwner.middleware";

const salesAd = {
    existsSalesAdId,
    existsSalesImageId,
    paginateSalesAd,
    ensureIsOwner,
};

export default salesAd;
