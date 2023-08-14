import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1692045927723 implements MigrationInterface {
    name = 'CreateTables1692045927723'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "salesAd" ("id" character varying NOT NULL, "created_at" text NOT NULL, "brand" character varying(255) NOT NULL, "model" character varying(255) NOT NULL, "color" character varying(255) NOT NULL, "engine" character varying(255) NOT NULL, "description" text NOT NULL, "year" character varying(4) NOT NULL, "mileage" integer NOT NULL, "price" integer NOT NULL, "status" boolean NOT NULL DEFAULT true, "isGoodPrice" boolean NOT NULL, "userId" character varying, CONSTRAINT "PK_5e76654310265ee7cbf2a0c8cdf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "salesImages" ("id" character varying NOT NULL, "created_at" text NOT NULL, "imageUrl" text NOT NULL, "principal" boolean NOT NULL DEFAULT false, "salesAdId" character varying, CONSTRAINT "PK_da26936c1ff5c5508c1b4d8922c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."users_role_enum" AS ENUM('seller', 'buyer')`);
        await queryRunner.query(`CREATE TABLE "users" ("id" character varying NOT NULL, "created_at" text NOT NULL, "firstName" character varying(255) NOT NULL, "lastName" character varying(255) NOT NULL, "email" character varying(255) NOT NULL, "password" character varying(255) NOT NULL, "cpf" character varying(11) NOT NULL, "cellphone" character varying(14) NOT NULL, "description" text NOT NULL, "userImage" text NOT NULL, "role" "public"."users_role_enum" NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "UQ_15f2ebe082a6e43a960f9f88411" UNIQUE ("cellphone"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "addresses" ("id" character varying NOT NULL, "created_at" text NOT NULL, "cep" character varying(8) NOT NULL, "city" character varying(255) NOT NULL, "street" character varying(255) NOT NULL, "addressNumber" integer NOT NULL, "addressComplement" character varying(255), "userId" character varying, CONSTRAINT "REL_95c93a584de49f0b0e13f75363" UNIQUE ("userId"), CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "salesAd" ADD CONSTRAINT "FK_e8e4d8d6d78a5b063dc2007e719" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "salesImages" ADD CONSTRAINT "FK_8547cba5227f7d0c7bcaec89c49" FOREIGN KEY ("salesAdId") REFERENCES "salesAd"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "FK_95c93a584de49f0b0e13f753630" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "FK_95c93a584de49f0b0e13f753630"`);
        await queryRunner.query(`ALTER TABLE "salesImages" DROP CONSTRAINT "FK_8547cba5227f7d0c7bcaec89c49"`);
        await queryRunner.query(`ALTER TABLE "salesAd" DROP CONSTRAINT "FK_e8e4d8d6d78a5b063dc2007e719"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
        await queryRunner.query(`DROP TABLE "salesImages"`);
        await queryRunner.query(`DROP TABLE "salesAd"`);
    }

}
