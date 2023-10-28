import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PosterService } from './poster.service';

@Controller('poster')
export class PosterController {
  constructor(private readonly posterService: PosterService) { }

  @Get()
  findAll() {
    return this.posterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.posterService.findOne(id);
  }
}
