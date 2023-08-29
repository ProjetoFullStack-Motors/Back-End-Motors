import { z } from "zod";
import schemas from "../schemas";
import { DeepPartial } from "typeorm";

type TAddressRequest = z.infer<typeof schemas.addresses.addressRequestSchema>;

type TAddressUpdate = DeepPartial<TAddressRequest>;

export { TAddressUpdate };
