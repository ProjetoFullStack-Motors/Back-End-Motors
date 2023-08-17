import {
    TUserResponse,
    TUserWithoutSales,
} from "../../interfaces/users.interface";
import { AppError } from "../../middlewares/shared/handlerErrors.middleware";
import schemas from "../../schemas";
import repositories from "../../utils";

const retrieveUserSales = async (
    id: string
): Promise<TUserResponse | TUserWithoutSales> => {
    const user = await repositories.usersRepo.findOne({
        where: {
            id: id,
        },
        relations: {
            address: true,
            sales: {
                salesImages: true,
            },
        },
    });

    if (!user) throw new AppError("User not found", 404);

    user.sales = user.sales.map((saleAd) => {
        return { ...saleAd, price: saleAd.price / 100 };
    });

    console.log(user);

    let userRes: TUserResponse;
    if (user.role === "seller") {
        userRes = schemas.users.userResponseSchema.parse(user);
    } else {
        userRes = schemas.users.userWithoutSales.parse(user);
    }

    return userRes;
};

export default retrieveUserSales;
