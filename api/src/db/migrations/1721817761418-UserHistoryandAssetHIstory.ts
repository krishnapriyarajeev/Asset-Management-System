import { MigrationInterface, QueryRunner } from "typeorm";

export class UserHistoryandAssetHIstory1721817761418 implements MigrationInterface {
    name = 'UserHistoryandAssetHIstory1721817761418'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_history" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "user_id" integer NOT NULL, "action" character varying NOT NULL, "asset_id" integer NOT NULL, CONSTRAINT "PK_777252b9045d8011ab83c5b0834" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "asset_history" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "serial_number" character varying NOT NULL, "status" character varying NOT NULL, "user_id" integer NOT NULL, CONSTRAINT "PK_409e5fb8b4b5b0252accb6bc435" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "asset_history"`);
        await queryRunner.query(`DROP TABLE "user_history"`);
    }

}
