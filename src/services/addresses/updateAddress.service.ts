import { Address } from "../../entities/addresses.entity";
import { TAddressUpdate } from "../../interfaces/addresses.interface";
import repositories from "../../utils";

const update = async (
    addressData: TAddressUpdate,
    userId: string
): Promise<Address> => {
    const user = await repositories.usersRepo.findOneBy({ id: userId });

    const address = await repositories.addressesRepo
        .createQueryBuilder("address")
        .where("address.user = :userId", { userId: user!.id })
        .getOne();

    const newAddress = {
        ...address!,
        ...addressData,
    };

    await repositories.addressesRepo.save(newAddress);

    return newAddress;
};

export default update;
