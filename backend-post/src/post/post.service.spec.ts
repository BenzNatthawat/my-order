import { Test, TestingModule } from '@nestjs/testing';
import { SequelizeModule } from '@nestjs/sequelize';
import { PostService } from './post.service';
import { PostEntity } from '../entities/post.entity';
import { postProviders } from './post.providers';
import { CreatePostDto } from './dto/create-post.dto';
import { sequelizeConfigProvider } from '../../sequelize.config.provider';
import { NotFoundException } from '@nestjs/common';

describe('PostService', () => {
  let postService: PostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        sequelizeConfigProvider,
        SequelizeModule.forFeature([PostEntity]),
      ],
      providers: [PostService, ...postProviders],
    }).compile();

    postService = module.get<PostService>(PostService);
  });

  it('should be defined', () => {
    expect(postService).toBeDefined();
  });

  describe('create', () => {
    it('should create a post', async () => {
      const createPostDto: CreatePostDto = { name: "aa", post: "bb", score: 10 };
      const result: PostEntity = await postService.create(1, createPostDto);
      expect(result).toBeDefined();
    });
  });

  describe('findAll', () => {
    it('should find all posts for a given posterId', async () => {
      const result: PostEntity[] = await postService.findAll(1);
      expect(result).toBeDefined();
    });
  });

  it('should throw NotFoundException when post is not found in findOne', async () => {
    jest.spyOn(postService['postRepository'], 'findByPk').mockResolvedValue(null);

    await expect(postService.findOne(1)).rejects.toThrowError(NotFoundException);
  });

});