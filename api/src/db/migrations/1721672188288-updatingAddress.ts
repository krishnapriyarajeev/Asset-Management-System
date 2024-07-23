import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatingAddress1721672188288 implements MigrationInterface {
    name = 'UpdatingAddress1721672188288'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "flat_or_phone_no"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" ADD "flat_or_phone_no" character varying NOT NULL`);
    }

}
