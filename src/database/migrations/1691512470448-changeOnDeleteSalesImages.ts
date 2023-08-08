import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeOnDeleteSalesImages1691512470448 implements MigrationInterface {
    name = 'ChangeOnDeleteSalesImages1691512470448'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "salesImages" DROP CONSTRAINT "FK_8547cba5227f7d0c7bcaec89c49"`);
        await queryRunner.query(`ALTER TABLE "salesImages" ADD CONSTRAINT "FK_8547cba5227f7d0c7bcaec89c49" FOREIGN KEY ("salesAdId") REFERENCES "salesAd"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "salesImages" DROP CONSTRAINT "FK_8547cba5227f7d0c7bcaec89c49"`);
        await queryRunner.query(`ALTER TABLE "salesImages" ADD CONSTRAINT "FK_8547cba5227f7d0c7bcaec89c49" FOREIGN KEY ("salesAdId") REFERENCES "salesAd"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
