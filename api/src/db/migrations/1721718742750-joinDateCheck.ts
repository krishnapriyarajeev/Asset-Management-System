import { MigrationInterface, QueryRunner } from "typeorm";

export class JoinDateCheck1721718742750 implements MigrationInterface {
  name = "JoinDateCheck1721718742750";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "address" DROP COLUMN "flat_or_phone_no"`
    );
    await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "join_date"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "employee" ADD "join_date" TIMESTAMP NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE "address" ADD "flat_or_phone_no" character varying NOT NULL`
    );
  }
}
