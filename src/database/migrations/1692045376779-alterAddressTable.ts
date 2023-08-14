import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterAddressTable1692045376779 implements MigrationInterface {
    name = 'AlterAddressTable1692045376779'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "addressComplement" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "addressComplement" SET NOT NULL`);
    }

}
