import {
    TListArgument,
    TPaginateSalesAdResponse,
} from "../../interfaces/salesAd.interface";
import repositories from "../../utils";

const retrieveSalesByUserId = async (
    id: string,
    toListing: TListArgument
): Promise<TPaginateSalesAdResponse> => {
    const page = toListing.page;
    const perPage = toListing.perPage;

    const user = await repositories.usersRepo.findOne({
        where: {
            id,
        },
        relations: {
            address: true,
        },
    });

    const queryBuilder = repositories.salesAdRepo.createQueryBuilder("salesAd");
    queryBuilder
        .where("salesAd.user = :userId", { userId: id })
        .take(perPage)
        .skip((page - 1) * perPage)
        .leftJoinAndSelect("salesAd.salesImages", "salesImages")
        .addOrderBy("salesAd.created_at", "DESC");

    const [sales, salesAdCount] = await queryBuilder.getManyAndCount();

    const prevPageUrl: string | null =
        page <= 1
            ? null
            : `http://localhost:3000/salesAd/users/${id}?page=${page - 1}`;
    const nextPageUrl: string | null =
        page * perPage >= salesAdCount
            ? null
            : `http://localhost:3000/salesAd/users/${id}?page=${page + 1}`;

    const listSalesAdReturn = {
        prevPage: page <= 1 ? null : prevPageUrl,
        nextPage: page * perPage >= salesAdCount ? null : nextPageUrl,
        count: salesAdCount,
        user: user,
        data: sales,
    };

    return listSalesAdReturn;
};

export default retrieveSalesByUserId;
