import { randomUUID } from "node:crypto";
import { Column, PrimaryColumn } from "typeorm";

const createDate = (): string => {
    const time = BigInt(new Date().getTime());
    return time.toString();
};

export class BaseEntity {
    @PrimaryColumn()
    	id: string;

    @Column({ type: "text" })
    	created_at: string;

    constructor() {
    	if (!this.id) {
    		this.id = randomUUID();
    	}

        if (!this.created_at) {
            this.created_at = createDate();
        }
    }
}