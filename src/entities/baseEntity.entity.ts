import { randomUUID } from "node:crypto";
import { Column, PrimaryColumn } from "typeorm";

console.log(new Date().getDate());

export class BaseEntity {
    @PrimaryColumn()
    	id: string;

    @Column({ type: "timestamp"})
    	created_at: string | Date;

    constructor() {
    	if (!this.id) {
    		this.id = randomUUID();
    	}

        if (!this.created_at) {
            this.created_at = new Date();
        }
    }
}