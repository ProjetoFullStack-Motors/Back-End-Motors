import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAddressesTable1692036127179 implements MigrationInterface {
    name = 'CreateAddressesTable1692036127179'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "addresses" ("id" character varying NOT NULL, "created_at" text NOT NULL, "cep" character varying(8) NOT NULL, "city" character varying(255) NOT NULL, "street" character varying(255) NOT NULL, "addressNumber" integer NOT NULL, "addressComplement" character varying(255) NOT NULL, "userId" character varying, CONSTRAINT "REL_95c93a584de49f0b0e13f75363" UNIQUE ("userId"), CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "FK_95c93a584de49f0b0e13f753630" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "FK_95c93a584de49f0b0e13f753630"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
    }

}
