import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateEmployee1721629582663 implements MigrationInterface {
    name = 'UpdateEmployee1721629582663'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "join_date"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" ADD "join_date" TIMESTAMP NOT NULL`);
    }

}
