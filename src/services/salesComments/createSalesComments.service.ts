import {
    TCommentRequest,
    TCommentResponse,
} from "../../interfaces/salesComments.interfaces";
import { User } from "../../entities/users.entity";
import repositories from "../../utils";
import { SalesAd } from "../../entities/salesAd.entity";
import schemas from "../../schemas";
import SaleComments from "../../entities/salesComments.entity";

const createComment = async (
    data: TCommentRequest,
    salesAdId: string,
    userId: string
): Promise<TCommentResponse> => {
    const user: User | null = await repositories.usersRepo.findOne({
        where: {
            id: userId,
        },
    });

    const salesAd: SalesAd | null = await repositories.salesAdRepo.findOne({
        where: {
            id: salesAdId,
        },
        relations: {
            user: true,
        },
    });

    const treatedUser = schemas.users.userWithoutSalesAndAddress.parse(user!);
    const treatedUserSeller = schemas.users.userWithoutSalesAndAddress.parse(
        salesAd!.user
    );

    const newComment = repositories.commentsRepo.create({
        ...data,
        user: treatedUser,
        salesAd: treatedUserSeller,
    });

    await repositories.commentsRepo.save(newComment);

    return newComment;
};

export default createComment;
