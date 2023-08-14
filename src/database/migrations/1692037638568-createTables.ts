import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1692037638568 implements MigrationInterface {
    name = 'CreateTables1692037638568'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "addresses" ("id" character varying NOT NULL, "created_at" text NOT NULL, "cep" character varying(8) NOT NULL, "city" character varying(255) NOT NULL, "street" character varying(255) NOT NULL, "addressNumber" integer NOT NULL, "addressComplement" character varying(255) NOT NULL, "userId" character varying, CONSTRAINT "REL_95c93a584de49f0b0e13f75363" UNIQUE ("userId"), CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "lasName"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "lastName" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_8bf113d84b6d3e06b03a62e0ecd"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "userImage"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "userImage" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "FK_95c93a584de49f0b0e13f753630" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "FK_95c93a584de49f0b0e13f753630"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "userImage"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "userImage" character varying(14) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_8bf113d84b6d3e06b03a62e0ecd" UNIQUE ("userImage")`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "lastName"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "lasName" character varying(255) NOT NULL`);
        await queryRunner.query(`DROP TABLE "addresses"`);
    }

}
