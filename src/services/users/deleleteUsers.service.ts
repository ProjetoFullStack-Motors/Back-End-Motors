import { User } from "../../entities/users.entity";
import repositories from "../../utils";

const deleteUser = async (userId: string): Promise<void> => {
    const user: User | null = await repositories.usersRepo.findOneBy({
        id: userId,
    });

    if(!user) throw new Error("User not found");

    await repositories.usersRepo.remove(user);

    return;
};

export default deleteUser;