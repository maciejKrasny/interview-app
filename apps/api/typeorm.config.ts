import { DataSource } from "typeorm";
import * as path from 'path';

import { config } from 'dotenv';

config();

const entitiesCatalog = process.env.NODE_ENV === 'production'
    ? '/**/*.entity*{.ts,.js}'
    : 'dist/src/**/*.entity*{.ts,.js}';

const migrationsCatalog = process.env.NODE_ENV === 'production'
    ? 'database/migrations/**/*{.ts,.js}'
    : 'dist/database/migrations/**/*{.ts,.js}';


export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    // @ts-ignore
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'interview_app',
    entities: [path.join(__dirname, entitiesCatalog)],
    migrationsRun: true,
    migrationsTableName: 'interview_app_migrations',
    migrations: [path.join(__dirname, migrationsCatalog)],
    synchronize: false,
    logging: true,
    logger: 'advanced-console',
    schema: 'public',
  ssl: false,
})

AppDataSource.initialize()
    .then(() => {
        console.log('Data Source has been initialized!');
    })
    .catch((err) => {
        console.error('Error during Data Source initialization', err);
    });