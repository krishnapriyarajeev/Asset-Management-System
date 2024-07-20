import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatingAllEntities1721489235252 implements MigrationInterface {
    name = 'UpdatingAllEntities1721489235252'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "category_name" character varying NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "address" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "line1" character varying NOT NULL, "line2" character varying NOT NULL, "flat_or_phone_no" character varying NOT NULL, "employee_id" integer, CONSTRAINT "REL_7e77f562043393b08de949b804" UNIQUE ("employee_id"), CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "department" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying NOT NULL, CONSTRAINT "UQ_471da4b90e96c1ebe0af221e07b" UNIQUE ("name"), CONSTRAINT "PK_9a2213262c1593bffb581e382f5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "requested_items" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "subcategoryid" integer NOT NULL, "requestid" integer NOT NULL, "reason" character varying NOT NULL, "request_type" character varying NOT NULL, "requests_id" integer, "subcategory_id" integer, CONSTRAINT "PK_fa626deb1cf4cff47c775f9502f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "requests" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "employeeid" integer NOT NULL, "status" character varying NOT NULL, "employee_id" integer, CONSTRAINT "PK_0428f484e96f9e6a55955f29b5f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "employee" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying, "role" character varying, "status" character varying NOT NULL, "experience" integer NOT NULL, "join_date" TIMESTAMP NOT NULL, "department_id" integer, CONSTRAINT "UQ_817d1d427138772d47eca048855" UNIQUE ("email"), CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "assets" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "serial_number" character varying NOT NULL, "status" character varying NOT NULL, "employeeid" integer NOT NULL, "subcategoryid" integer NOT NULL, "subcategory_id" integer, "employee_id" integer, CONSTRAINT "PK_da96729a8b113377cfb6a62439c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subcategory" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "brand_name" character varying NOT NULL, "model_name" character varying NOT NULL, "subcategory_name" character varying NOT NULL, "category_id" integer, CONSTRAINT "PK_5ad0b82340b411f9463c8e9554d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_7e77f562043393b08de949b804b" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "requested_items" ADD CONSTRAINT "FK_53932e62477d38bfebd69469ca8" FOREIGN KEY ("requests_id") REFERENCES "requests"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "requested_items" ADD CONSTRAINT "FK_f13377fb2eda7753c3f66fce1a4" FOREIGN KEY ("subcategory_id") REFERENCES "subcategory"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "requests" ADD CONSTRAINT "FK_bdc11d6321ec9dff5c8b09c1a21" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employee" ADD CONSTRAINT "FK_d62835db8c0aec1d18a5a927549" FOREIGN KEY ("department_id") REFERENCES "department"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "assets" ADD CONSTRAINT "FK_7381c8d13a865773ef06beda85e" FOREIGN KEY ("subcategory_id") REFERENCES "subcategory"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "assets" ADD CONSTRAINT "FK_e273ab6b2ab53545c29d9af6555" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "subcategory" ADD CONSTRAINT "FK_23584d8b8d26287e4fca0e1aaab" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subcategory" DROP CONSTRAINT "FK_23584d8b8d26287e4fca0e1aaab"`);
        await queryRunner.query(`ALTER TABLE "assets" DROP CONSTRAINT "FK_e273ab6b2ab53545c29d9af6555"`);
        await queryRunner.query(`ALTER TABLE "assets" DROP CONSTRAINT "FK_7381c8d13a865773ef06beda85e"`);
        await queryRunner.query(`ALTER TABLE "employee" DROP CONSTRAINT "FK_d62835db8c0aec1d18a5a927549"`);
        await queryRunner.query(`ALTER TABLE "requests" DROP CONSTRAINT "FK_bdc11d6321ec9dff5c8b09c1a21"`);
        await queryRunner.query(`ALTER TABLE "requested_items" DROP CONSTRAINT "FK_f13377fb2eda7753c3f66fce1a4"`);
        await queryRunner.query(`ALTER TABLE "requested_items" DROP CONSTRAINT "FK_53932e62477d38bfebd69469ca8"`);
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_7e77f562043393b08de949b804b"`);
        await queryRunner.query(`DROP TABLE "subcategory"`);
        await queryRunner.query(`DROP TABLE "assets"`);
        await queryRunner.query(`DROP TABLE "employee"`);
        await queryRunner.query(`DROP TABLE "requests"`);
        await queryRunner.query(`DROP TABLE "requested_items"`);
        await queryRunner.query(`DROP TABLE "department"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`DROP TABLE "category"`);
    }

}
