import { Test, TestingModule } from '@nestjs/testing';
import { PosterService } from './poster.service';
import { postersArr } from '../../test/poster.data'

describe('PosterService', () => {
  let service: PosterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [{
        provide: PosterService,
        useValue: {
          findAll: jest.fn(() => postersArr),
          findOne: jest.fn((id: number) => postersArr[id]),
        }
      }]
    }).compile();

    service = module.get<PosterService>(PosterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll()', () => {
    it('should return an array of poster', async () => {
      const posters = await service.findAll();
      expect(posters).toEqual(postersArr);
    });
  });

  describe('findOne()', () => {
    it('should get a single poster', () => {
      expect(service.findOne(0)).toEqual(postersArr[0]);
      expect(service.findOne(1)).toEqual(postersArr[1]);
      expect(service.findOne(2)).toEqual(postersArr[2]);
    });
  });

});