import { CategoryEntity } from "src/category/entities/category.entity";
import { DataSource, MigrationInterface, QueryRunner } from "typeorm";
import { INITIAL_CATEGORIES } from "./data";
import { config } from 'dotenv';

config();

export class SeedCategories11719417469050 implements MigrationInterface {
    name = 'SeedCategories1719417469050';
    public async up(queryRunner: QueryRunner): Promise<void> {
        console.log(process.env.DB_HOST)
        const seedDataSource = new DataSource({
            type: 'postgres',
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT, 10) || 5432,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            synchronize: false,
            database: 'interview_app',
            entities: ['dist/src/**/*.entity*{.ts,.js}'],
        })

        await seedDataSource.initialize();

        const categoryRepository = seedDataSource.getRepository(CategoryEntity);

        for (const category of INITIAL_CATEGORIES) {
            await categoryRepository.save(category)
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> { }
}