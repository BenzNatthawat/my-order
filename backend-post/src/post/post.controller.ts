import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostEntity } from 'src/entities/post.entity';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) { }

  @Post('/:posterId')
  async create(@Param('posterId') posterId: number, @Body() createPostDto: CreatePostDto): Promise<PostEntity> {
    const result: PostEntity = await this.postService.create(posterId, createPostDto);
    return result
  }

  @Get('by-poster/:id')
  async findAll(@Param('id') id: number): Promise<PostEntity[]> {
    const result: PostEntity[] = await this.postService.findAll(id);
    return result
  }

  @Get('score/:id')
  async findScoreByPoster(@Param('id') id: number) {
    const count = await this.postService.findCountByPoster(id);
    const score = await this.postService.findScoreByPoster(id);
    return {
      count: Number(count.count),
      ...score
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<PostEntity> {
    const result: PostEntity = await this.postService.findOne(id);
    return result
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updatePostDto: UpdatePostDto): Promise<PostEntity> {
    const result: PostEntity = await this.postService.update(id, updatePostDto);
    return result
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<number> {
    const result: number = await this.postService.remove(id);
    return result
  }
}
