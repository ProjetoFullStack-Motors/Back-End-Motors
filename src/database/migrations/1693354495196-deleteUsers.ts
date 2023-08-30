import { MigrationInterface, QueryRunner } from "typeorm";

export class DeleteUsers1693354495196 implements MigrationInterface {
    name = 'DeleteUsers1693354495196'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "FK_95c93a584de49f0b0e13f753630"`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "REL_95c93a584de49f0b0e13f75363"`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "userId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ADD "userId" character varying`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "REL_95c93a584de49f0b0e13f75363" UNIQUE ("userId")`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "FK_95c93a584de49f0b0e13f753630" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
