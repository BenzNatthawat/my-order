import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostEntity } from 'src/entities/post.entity';
import sequelize from 'sequelize';
import { type } from 'os';

type Score = {
  posterId: Number
  total: Number
}

type Count = {
  posterId: Number
  count: Number
}

@Injectable()
export class PostService {
  constructor(
    @Inject('POST_REPOSITORY')
    private readonly postRepository: typeof PostEntity,
  ) { }

  async create(posterId: number, createPostDto: CreatePostDto): Promise<PostEntity> {
    const result: PostEntity = await this.postRepository.create<PostEntity>({
      ...createPostDto,
      posterId: posterId
    })
    return result
  }

  async findAll(id: number): Promise<PostEntity[]> {
    const results: PostEntity[] = await this.postRepository.findAll<PostEntity>({
      where: {
        posterId: id
      }
    });
    return results
  }

  async findOne(id: number): Promise<PostEntity> {
    const result: PostEntity = await this.postRepository.findOne<PostEntity>({
      where: {
        id: id
      }
    });
    if (!result) {
      throw new NotFoundException('Post not found');
    }
    return result
  }

  async findCountByPoster(id: number): Promise<Count> {
    const result: Count[] = await this.postRepository.findAll<any>({
      attributes: ['posterId', [sequelize.fn('count', sequelize.col('poster_id')), 'count']],
      where: {
        posterId: id
      },
      group: ['posterId'],
      raw: true,
    });
    return result[0]
  }

  async findScoreByPoster(id: number): Promise<Score> {
    const result: Score[] = await this.postRepository.findAll<any>({
      attributes: ['posterId', [sequelize.fn('sum', sequelize.col('score')), 'total']],
      where: {
        posterId: id
      },
      group: ['posterId'],
      raw: true,
    });
    return result[0]
  }

  async update(id: number, updatePostDto: UpdatePostDto): Promise<any> {
    const findPost: PostEntity = await this.postRepository.findOne<PostEntity>({
      where: {
        id: id
      }
    });
    if (!findPost) {
      throw new NotFoundException('Post not fount')
    }
    const result: [number, PostEntity[]] = await this.postRepository.update<PostEntity>({
      ...updatePostDto,
    }, {
      where: { id: id },
      returning: true,
    })
    return result[1][0]
  }

  async remove(id: number): Promise<number> {
    const findPost: PostEntity = await this.postRepository.findOne<PostEntity>({
      where: {
        id: id
      }
    });
    if (!findPost) {
      throw new NotFoundException('Post not fount')
    }
    const result: number = await this.postRepository.destroy<PostEntity>({
      where: { id: id }
    })
    return result
  }
}
