import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatingEntities1721495774045 implements MigrationInterface {
    name = 'UpdatingEntities1721495774045'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subcategory" RENAME COLUMN "subcategory_name" TO "specifications"`);
        await queryRunner.query(`ALTER TABLE "requested_items" DROP COLUMN "subcategoryid"`);
        await queryRunner.query(`ALTER TABLE "requested_items" DROP COLUMN "requestid"`);
        await queryRunner.query(`ALTER TABLE "requests" DROP COLUMN "employeeid"`);
        await queryRunner.query(`ALTER TABLE "assets" DROP COLUMN "subcategoryid"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "assets" ADD "subcategoryid" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "requests" ADD "employeeid" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "requested_items" ADD "requestid" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "requested_items" ADD "subcategoryid" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "subcategory" RENAME COLUMN "specifications" TO "subcategory_name"`);
    }

}
