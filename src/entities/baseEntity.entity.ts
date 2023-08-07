import { randomUUID } from "node:crypto";
import { CreateDateColumn, PrimaryColumn } from "typeorm";

export class BaseEntity {
    @PrimaryColumn()
    	id: string;

    @CreateDateColumn({ type: "date" })
    	created_at: string | Date;

    constructor() {
    	if (!this.id) {
    		this.id = randomUUID();
    	}
    }
}