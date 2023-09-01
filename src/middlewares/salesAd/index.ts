import existsSalesAdId from "./existsSalesAdId.middleware";
import existsSalesImageId from "./existsSalesImageId.middleware";
import paginateSalesAd from "./paginateSalesAd.middleware";
import ensureIsOwner from "./ensureIsOwner.middleware";
import ensureImageExists from "./ensureImageExists.middleware";

const salesAd = {
    existsSalesAdId,
    existsSalesImageId,
    paginateSalesAd,
    ensureIsOwner,
    ensureImageExists,
};

export default salesAd;
