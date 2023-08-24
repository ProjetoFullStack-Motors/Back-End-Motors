import { TUserUdpateRequest, TUserWithoutAddress } from "../../interfaces/users.interface";
import schemas from "../../schemas";
import repositories from "../../utils";

const update = async (
    id: string,
    payload: TUserUdpateRequest
): Promise<TUserWithoutAddress> => {
    const foundUser = await repositories.usersRepo.findOneBy({ id: id });
    console.log(foundUser, "foundUser");

    if (!foundUser || foundUser === null) {
        throw new Error("User not found");
    }

    const user = repositories.usersRepo.create(
        { ...foundUser, ...payload }
    );
    
    await repositories.usersRepo.save(user);

   
    const userRes = schemas.users.userWithoutAddress.parse(user);

    return userRes;
};

export default update;
