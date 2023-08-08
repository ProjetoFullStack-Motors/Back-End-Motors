import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangePrincipalSalesImagesFieldDefault1691525842925 implements MigrationInterface {
    name = 'ChangePrincipalSalesImagesFieldDefault1691525842925'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "salesImages" ALTER COLUMN "principal" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "salesImages" ALTER COLUMN "principal" DROP DEFAULT`);
    }

}
