import {
    TListArgument,
    TPaginateSalesAdWithUser,
} from "../../interfaces/salesAd.interface";
import schemas from "../../schemas";
import repositories from "../../utils";

const retrieveSalesByUserId = async (
    id: string,
    toListing: TListArgument
): Promise<TPaginateSalesAdWithUser> => {
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

    const salesAdRes =
        schemas.salesAd.paginateSalesAdWithUser.parse(listSalesAdReturn);

    return salesAdRes;
};

export default retrieveSalesByUserId;
