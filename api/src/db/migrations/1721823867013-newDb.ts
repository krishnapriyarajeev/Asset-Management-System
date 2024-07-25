import { MigrationInterface, QueryRunner } from "typeorm";

export class NewDb1721823867013 implements MigrationInterface {
    name = 'NewDb1721823867013'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "requested_items" ADD "status" character varying NOT NULL DEFAULT 'Pending'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "requested_items" DROP COLUMN "status"`);
    }

}
