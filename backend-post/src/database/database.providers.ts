import { ConfigModule, ConfigService } from '@nestjs/config';
import { Sequelize } from 'sequelize-typescript';
import { Post } from 'src/entities/post.entity';
import { Poster } from 'src/entities/poster.entity';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        imports: [ConfigModule],
        useFactory: async (config: ConfigService) => {
            const sequelize = new Sequelize(config.get('database'));
            sequelize.addModels([Post, Poster]);
            await sequelize
                .authenticate()
                .then(() => {
                    console.log('Connection has been established successfully.');
                })
                .catch((err) => {
                    console.error('Unable to connect to the database:', err);
                });
            // await sequelize.sync();
            return sequelize;
        },
        inject: [ConfigService],
    },
];
