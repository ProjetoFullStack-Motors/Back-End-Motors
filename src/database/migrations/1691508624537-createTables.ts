import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1691508624537 implements MigrationInterface {
    name = 'CreateTables1691508624537'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."salesAd_engine_enum" AS ENUM('flex', 'hybrid', 'electric')`);
        await queryRunner.query(`CREATE TABLE "salesAd" ("id" character varying NOT NULL, "created_at" text NOT NULL, "brand" character varying(255) NOT NULL, "model" character varying(255) NOT NULL, "color" character varying(255) NOT NULL, "engine" "public"."salesAd_engine_enum" NOT NULL, "description" text NOT NULL, "year" date NOT NULL, "mileage" integer NOT NULL, "price" integer NOT NULL, "status" boolean NOT NULL DEFAULT true, "isGoodPrice" boolean NOT NULL, CONSTRAINT "PK_5e76654310265ee7cbf2a0c8cdf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "salesImages" ("id" character varying NOT NULL, "created_at" text NOT NULL, "imageUrl" text NOT NULL, "principal" boolean NOT NULL, "salesAdId" character varying, CONSTRAINT "PK_da26936c1ff5c5508c1b4d8922c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "salesImages" ADD CONSTRAINT "FK_8547cba5227f7d0c7bcaec89c49" FOREIGN KEY ("salesAdId") REFERENCES "salesAd"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "salesImages" DROP CONSTRAINT "FK_8547cba5227f7d0c7bcaec89c49"`);
        await queryRunner.query(`DROP TABLE "salesImages"`);
        await queryRunner.query(`DROP TABLE "salesAd"`);
        await queryRunner.query(`DROP TYPE "public"."salesAd_engine_enum"`);
    }

}
