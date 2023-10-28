import { Module } from '@nestjs/common';
import configuration from './config/configuration';
import { ConfigModule } from '@nestjs/config';
import { PostModule } from './post/post.module';
import { DatabaseModule } from './database/database.module';
import { PosterModule } from './poster/poster.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: `${process.cwd()}/.env`,
    load: [configuration],
  }), 
  DatabaseModule,
  PostModule,
  PosterModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
