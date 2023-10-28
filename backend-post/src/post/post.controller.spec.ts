import { Test, TestingModule } from '@nestjs/testing';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { postersArr } from '../../test/poster.data';

describe('PostController', () => {
  let controller: PostController;
  let service: PostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostController],
      providers: [{
        provide: PostService,
        useValue: {
          findAll: jest.fn().mockResolvedValue(postersArr),
          findOne: jest.fn().mockImplementation((id: string) =>
            Promise.resolve(postersArr[id]),
          ),
        }
      }],
    }).compile();

    controller = module.get<PostController>(PostController);
    service = module.get<PostService>(PostService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll()', () => {
    it('should find all post', () => {
      controller.findAll(1);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne()', () => {
    it('should find a post', () => {
      controller.findOne(1);
      expect(service.findOne).toHaveBeenCalled();
      expect(controller.findOne(0)).resolves.toEqual(postersArr[0]);
      expect(controller.findOne(1)).resolves.toEqual(postersArr[1]);
      expect(controller.findOne(2)).resolves.toEqual(postersArr[2]);
    });
  });
});
