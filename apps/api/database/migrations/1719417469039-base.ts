import { MigrationInterface, QueryRunner } from "typeorm";

export class Base1719417469039 implements MigrationInterface {
    name = 'Base1719417469039'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Category" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text NOT NULL, CONSTRAINT "unique_name" UNIQUE ("name"), CONSTRAINT "PK_c2727780c5b9b0c564c29a4977c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Question" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "creationDate" TIMESTAMP NOT NULL DEFAULT now(), "textPolish" text NOT NULL, "textEnglish" text NOT NULL, "answerPolish" text NOT NULL, "answerEnglish" text NOT NULL, "learningStatus" "public"."Question_learningstatus_enum" NOT NULL DEFAULT 'TODO', "categoryId" uuid, CONSTRAINT "PK_1a855c8b4f527c9633c4b054675" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Question" ADD CONSTRAINT "FK_73baa3c05bf2b724908ae16bd73" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Question" DROP CONSTRAINT "FK_73baa3c05bf2b724908ae16bd73"`);
        await queryRunner.query(`DROP TABLE "Question"`);
        await queryRunner.query(`DROP TABLE "Category"`);
    }

}
