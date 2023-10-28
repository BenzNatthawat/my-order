import { Module } from '@nestjs/common';
import { PosterService } from './poster.service';
import { PosterController } from './poster.controller';
import { posterProviders } from './poster.providers';

@Module({
  controllers: [PosterController],
  providers: [PosterService, ...posterProviders],
  exports: [...posterProviders]
})
export class PosterModule { }
