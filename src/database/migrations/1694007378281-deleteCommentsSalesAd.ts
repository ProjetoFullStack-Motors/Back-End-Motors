import { MigrationInterface, QueryRunner } from "typeorm";

export class DeleteCommentsSalesAd1694007378281 implements MigrationInterface {
    name = 'DeleteCommentsSalesAd1694007378281'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "salesComments" DROP CONSTRAINT "FK_ffd279b8119b908526caebaccc9"`);
        await queryRunner.query(`ALTER TABLE "salesComments" ADD CONSTRAINT "FK_ffd279b8119b908526caebaccc9" FOREIGN KEY ("salesAdId") REFERENCES "salesAd"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "salesComments" DROP CONSTRAINT "FK_ffd279b8119b908526caebaccc9"`);
        await queryRunner.query(`ALTER TABLE "salesComments" ADD CONSTRAINT "FK_ffd279b8119b908526caebaccc9" FOREIGN KEY ("salesAdId") REFERENCES "salesAd"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
