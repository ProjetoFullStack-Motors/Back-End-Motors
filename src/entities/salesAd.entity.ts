import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

import { BaseEntity } from "./baseEntity.entity";

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

    @Column({ type: "enum", enum: Engine })
    engine: Engine;

    @Column({ type: "text" })
    description: string;

    @Column({ type: "date" })
    year: string | Date;

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
}

@Entity("salesImages")
class SalesImages extends BaseEntity {
    @Column({ type: "text" })
    imageUrl: string;

    @Column({ type: "boolean" })
    principal: boolean;

    @ManyToOne(() => SalesAd, (salesAd) => salesAd.salesImages, {
        onDelete: "CASCADE",
    })
    salesAd: SalesAd;
}

export { SalesAd, SalesImages };
