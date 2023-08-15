import { TUserRequest, TUserResponse } from "../../interfaces/users.interface";
import schemas from "../../schemas";
import repositories from "../../utils";

const create = async (userData: TUserRequest): Promise<TUserResponse> => {
    const { address, ...userDetails } = userData;

    const user = repositories.usersRepo.create(userDetails);
    await repositories.usersRepo.save(user);

    const newAddress = repositories.addressesRepo.create(address);

    const addresses = {
        ...newAddress,
        user,
    };
    await repositories.addressesRepo.save(addresses);

    const newUser = {
        ...user,
        address: newAddress,
    };

    const userRes = schemas.users.userResponseSchema.parse(newUser);

    return userRes;
};

export default create;
