import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeSalesImagesOrder1691595897475 implements MigrationInterface {
    name = 'ChangeSalesImagesOrder1691595897475'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "salesAd" DROP COLUMN "engine"`);
        await queryRunner.query(`DROP TYPE "public"."salesAd_engine_enum"`);
        await queryRunner.query(`ALTER TABLE "salesAd" ADD "engine" character varying(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "salesAd" DROP COLUMN "engine"`);
        await queryRunner.query(`CREATE TYPE "public"."salesAd_engine_enum" AS ENUM('flex', 'hybrid', 'electric')`);
        await queryRunner.query(`ALTER TABLE "salesAd" ADD "engine" "public"."salesAd_engine_enum" NOT NULL`);
    }

}
