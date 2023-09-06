import { MigrationInterface, QueryRunner } from "typeorm";

export class DeleteComments1694007177828 implements MigrationInterface {
    name = 'DeleteComments1694007177828'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "salesComments" DROP CONSTRAINT "FK_7aea602b50ed225c8d8fdb38b66"`);
        await queryRunner.query(`ALTER TABLE "salesComments" ADD CONSTRAINT "FK_7aea602b50ed225c8d8fdb38b66" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "salesComments" DROP CONSTRAINT "FK_7aea602b50ed225c8d8fdb38b66"`);
        await queryRunner.query(`ALTER TABLE "salesComments" ADD CONSTRAINT "FK_7aea602b50ed225c8d8fdb38b66" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
