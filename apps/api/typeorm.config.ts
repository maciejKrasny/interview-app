import { DataSource } from "typeorm";

export default new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'docker',
    password: 'secret',
    database: 'interview_app',
    entities: ['dist/src/**/*.entity*{.ts,.js}'],
    migrationsRun: true,
    migrationsTableName: 'interview_app_migrations',
    migrations: ['dist/database/migrations/*.js'],
    synchronize: false,
    logging: true,
    logger: 'advanced-console',
    schema: 'public'
})