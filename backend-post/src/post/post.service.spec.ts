import { Test, TestingModule } from '@nestjs/testing';
import { PostService } from './post.service';
import { postersArr } from '../../test/poster.data';

describe('PostService', () => {
  let service: PostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [{
        provide: PostService,
        useValue: {
          findAll: jest.fn(() => postersArr),
          findOne: jest.fn((id: number) => postersArr[id]),
        }
      }],
    }).compile();

    service = module.get<PostService>(PostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll()', () => {
    it('should return an array of post', async () => {
      const posters = await service.findAll(1);
      expect(posters).toEqual(postersArr);
    });
  });

  describe('findOne()', () => {
    it('should get a single post', () => {
      expect(service.findOne(0)).toEqual(postersArr[0]);
      expect(service.findOne(1)).toEqual(postersArr[1]);
      expect(service.findOne(2)).toEqual(postersArr[2]);
    });
  });
});
