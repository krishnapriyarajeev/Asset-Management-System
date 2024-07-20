import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatingAssetEntities1721495891474 implements MigrationInterface {
    name = 'UpdatingAssetEntities1721495891474'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "assets" DROP COLUMN "employeeid"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "assets" ADD "employeeid" integer NOT NULL`);
    }

}
