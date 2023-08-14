import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { BaseEntity } from "./baseEntity.entity";
import { User } from "./users.entitie";

@Entity("addresses")
class Address extends BaseEntity {
    @Column({ type: "varchar", length: 8 })
    cep: string;

    @Column({ type: "varchar", length: 255 })
    city: string;

    @Column({ type: "varchar", length: 255 })
    street: string;

    @Column({ type: "integer" })
    addressNumber: number;

    @Column({ type: "varchar", length: 255 })
    addressComplement: string | null | undefined;

    @OneToOne(() => User, (user) => user.address, { onDelete: "CASCADE" })
    @JoinColumn()
    user: User;
}

export { Address };
