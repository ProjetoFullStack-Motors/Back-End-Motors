import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateSaleComments1693227539289 implements MigrationInterface {
    name = 'CreateSaleComments1693227539289'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "FK_95c93a584de49f0b0e13f753630"`);
        await queryRunner.query(`CREATE TABLE "salesComments" ("id" character varying NOT NULL, "created_at" text NOT NULL, "comment" text NOT NULL, "salesAdId" character varying, "userId" character varying, CONSTRAINT "PK_b9666750f6325b3b77845bd5227" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "FK_95c93a584de49f0b0e13f753630" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "salesComments" ADD CONSTRAINT "FK_ffd279b8119b908526caebaccc9" FOREIGN KEY ("salesAdId") REFERENCES "salesAd"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "salesComments" ADD CONSTRAINT "FK_7aea602b50ed225c8d8fdb38b66" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "salesComments" DROP CONSTRAINT "FK_7aea602b50ed225c8d8fdb38b66"`);
        await queryRunner.query(`ALTER TABLE "salesComments" DROP CONSTRAINT "FK_ffd279b8119b908526caebaccc9"`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "FK_95c93a584de49f0b0e13f753630"`);
        await queryRunner.query(`DROP TABLE "salesComments"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "FK_95c93a584de49f0b0e13f753630" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
