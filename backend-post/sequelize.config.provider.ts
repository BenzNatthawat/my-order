import { SequelizeModule } from '@nestjs/sequelize';

export const sequelizeConfigProvider = SequelizeModule.forRootAsync({
    useFactory: () => ({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgrest',
        database: 'posts',
        autoLoadModels: true,
        synchronize: true,
        logging: false,
    }),
})
