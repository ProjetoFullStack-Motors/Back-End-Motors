import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

import { BaseEntity } from "./baseEntity.entity";

enum Engine {
    flex = "flex",
    hybrid = "hybrid",
    electric = "electric"
}

@Entity("salesAd")
export class SalesAd extends BaseEntity {
    @Column({type: "varchar", length: 255})
    	brand: string;

    @Column({type: "varchar", length: 255})
    	model: string;

    @Column({type: "varchar", length: 255})
    	color: string;

    @Column({type: "enum", enum: Engine})
    	engine: Engine;

    @Column({type: "text"})
    	description: string;

    @Column({ type: "date"})
    	year: string | Date;

    @Column({ type: "number"})
    	mileage: number;

    @Column({ type: "number"})
    	price: number;

    @Column({ type: "boolean", default: true})
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

    @ManyToOne(() => SalesAd, (salesAd) => salesAd.salesImages)
    	salesAd: SalesAd;
}