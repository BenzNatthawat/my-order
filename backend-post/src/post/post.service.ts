import { Injectable, Inject } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from 'src/entities/post.entity';
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
    private readonly postRepository: typeof Post,
  ) { }

  async create(posterId: number, createPostDto: CreatePostDto): Promise<Post> {
    const result: Post = await this.postRepository.create<Post>({
      ...createPostDto,
      posterId: posterId
    })
    return result
  }

  async findAll(id: number): Promise<Post[]> {
    const results: Post[] = await this.postRepository.findAll<Post>({
      where: {
        posterId: id
      }
    });
    return results
  }

  async findOne(id: number): Promise<Post> {
    const result: Post = await this.postRepository.findOne<Post>({
      where: {
        id: id
      }
    });
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

  async update(id: number, updatePostDto: UpdatePostDto): Promise<Post> {
    const result: [number, Post[]] = await this.postRepository.update<Post>({
      ...updatePostDto,
    }, {
      where: { id: id },
      returning: true,
    })
    return result[1][0]
  }

  async remove(id: number): Promise<number> {
    const result: number = await this.postRepository.destroy<Post>({
      where: { id: id }
    })
    return result
  }
}
