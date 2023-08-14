import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1692034423111 implements MigrationInterface {
    name = 'CreateUserTable1692034423111'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."users_role_enum" AS ENUM('seller', 'buyer')`);
        await queryRunner.query(`CREATE TABLE "users" ("id" character varying NOT NULL, "created_at" text NOT NULL, "firstName" character varying(255) NOT NULL, "lasName" character varying(255) NOT NULL, "email" character varying(255) NOT NULL, "password" character varying(255) NOT NULL, "cpf" character varying(11) NOT NULL, "cellphone" character varying(14) NOT NULL, "description" text NOT NULL, "userImage" character varying(14) NOT NULL, "role" "public"."users_role_enum" NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "UQ_15f2ebe082a6e43a960f9f88411" UNIQUE ("cellphone"), CONSTRAINT "UQ_8bf113d84b6d3e06b03a62e0ecd" UNIQUE ("userImage"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "salesAd" ADD "userId" character varying`);
        await queryRunner.query(`ALTER TABLE "salesAd" ADD CONSTRAINT "FK_e8e4d8d6d78a5b063dc2007e719" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "salesAd" DROP CONSTRAINT "FK_e8e4d8d6d78a5b063dc2007e719"`);
        await queryRunner.query(`ALTER TABLE "salesAd" DROP COLUMN "userId"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
    }

}
