import repositories from "../../utils";

type TValuesObj = {
    [key: string]: string[]
}

const findExistentValues = async () => {
    const values = ["engine", "color", "brand", "model", "year"];
    const valuesObj: TValuesObj  = {};

    for (const value of values) {
        const columName = `salesAd_${value}`;
        const queryResult = await repositories.salesAdRepo
            .createQueryBuilder("salesAd")
            .distinctOn([`salesAd.${value}`])
            .select(`salesAd.${value}`)
            .getRawMany();

        valuesObj[value] = queryResult.map((item) => item[columName]);            
    }

    return valuesObj;
};

export default findExistentValues;
