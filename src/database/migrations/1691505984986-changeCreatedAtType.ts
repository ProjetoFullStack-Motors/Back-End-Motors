import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeCreatedAtType1691505984986 implements MigrationInterface {
    name = 'ChangeCreatedAtType1691505984986'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "salesAd" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "salesAd" ADD "created_at" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "salesImages" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "salesImages" ADD "created_at" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "salesImages" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "salesImages" ADD "created_at" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "salesAd" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "salesAd" ADD "created_at" date NOT NULL DEFAULT now()`);
    }

}
