import repositories from "../../utils";

const findExistentValues = async () => {
    const colorsValues = await repositories.salesAdRepo
        .createQueryBuilder("salesAd")
        .distinctOn(["salesAd.color"])
        .select("salesAd.color")
        .getRawMany();

    const brandsValues = await repositories.salesAdRepo
        .createQueryBuilder("salesAd")
        .distinctOn(["salesAd.brand"])
        .select("salesAd.brand")
        .getRawMany();

    const modelsValues = await repositories.salesAdRepo
        .createQueryBuilder("salesAd")
        .distinctOn(["salesAd.model"])
        .select("salesAd.model")
        .getRawMany();

    const yearsValues = await repositories.salesAdRepo
        .createQueryBuilder("salesAd")
        .distinctOn(["salesAd.year"])
        .select("salesAd.year")
        .getRawMany();

    const enginesValues = await repositories.salesAdRepo
        .createQueryBuilder("salesAd")
        .distinctOn(["salesAd.engine"])
        .select("salesAd.engine")
        .getRawMany();

    const colors = colorsValues.map((color) => color.salesAd_color);
    const brands = brandsValues.map((brand) => brand.salesAd_brand);
    const models = modelsValues.map((model) => model.salesAd_model);
    const years = yearsValues.map((year) => year.salesAd_year);
    const engines = enginesValues.map((engine) => engine.salesAd_engine);

    return {
        engines,
        colors,
        brands,
        models,
        years,
    };
};

export default findExistentValues;
