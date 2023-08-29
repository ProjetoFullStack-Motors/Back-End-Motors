import SaleComments from "../../entities/salesComments.entity";
import repositories from "../../utils";

const deleteComment = async (id: string): Promise<void> => {
    const comment: SaleComments | null =
        await repositories.commentsRepo.findOne({
            where: {
                id: id,
            },
        });

    await repositories.commentsRepo.remove(comment!);
};

export default deleteComment;
