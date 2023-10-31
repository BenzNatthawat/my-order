import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { PosterService } from './poster.service';
import { Poster } from 'src/entities/poster.entity';

@Controller('poster')
export class PosterController {
  constructor(private readonly posterService: PosterService) { }

  @Get()
  async findAll(): Promise<Poster[]> {
    const result: Poster[] = await this.posterService.findAll();
    return result
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Poster> {
    const result: Poster = await this.posterService.findOne(id);
    return result
  }
}
