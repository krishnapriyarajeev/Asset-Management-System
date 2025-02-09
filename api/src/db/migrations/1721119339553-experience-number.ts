import { MigrationInterface, QueryRunner } from "typeorm";

export class ExperienceNumber1721119339553 implements MigrationInterface {
    name = 'ExperienceNumber1721119339553'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "experience"`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "experience" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "experience"`);
        await queryRunner.query(`ALTER TABLE "employee" ADD "experience" character varying NOT NULL`);
    }

}
