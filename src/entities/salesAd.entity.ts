import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

import { BaseEntity } from "./baseEntity.entity";
import { User } from "./users.entitie";

export enum Engine {
    flex = "flex",
    hybrid = "hybrid",
    electric = "electric",
}

@Entity("salesAd")
class SalesAd extends BaseEntity {
    @Column({ type: "varchar", length: 255 })
    brand: string;

    @Column({ type: "varchar", length: 255 })
    model: string;

    @Column({ type: "varchar", length: 255 })
    color: string;

    @Column({ type: "varchar", length: 255 })
    engine: string;

    @Column({ type: "text" })
    description: string;

    @Column({ type: "varchar", length: 4 })
    year: string;

    @Column({ type: "integer" })
    mileage: number;

    @Column({ type: "integer" })
    price: number;

    @Column({ type: "boolean", default: true })
    status: boolean;

    @Column({ type: "boolean" })
    isGoodPrice: boolean;

    @OneToMany(() => SalesImages, (salesImage) => salesImage.salesAd)
    salesImages: SalesImages[];

    @ManyToOne(() => User, (user) => user.sales, { onDelete: "CASCADE" })
    user: User;
}

@Entity("salesImages", {
    orderBy: {
        created_at: "ASC",
    },
})
class SalesImages extends BaseEntity {
    @Column({ type: "text" })
    imageUrl: string;

    @Column({ type: "boolean", default: false })
    principal: boolean;

    @ManyToOne(() => SalesAd, (salesAd) => salesAd.salesImages, {
        onDelete: "CASCADE",
    })
    salesAd: SalesAd;
}

export { SalesAd, SalesImages };
