import { Test, TestingModule } from '@nestjs/testing';
import { PosterController } from './poster.controller';
import { PosterService } from './poster.service';
import { postersArr } from '../../test/poster.data'

describe('PosterController', () => {
  let controller: PosterController;
  let service: PosterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PosterController],
      providers: [{
        provide: PosterService,
        useValue: {
          findAll: jest.fn().mockResolvedValue(postersArr),
          findOne: jest.fn().mockImplementation((id: string) =>
            Promise.resolve(postersArr[id]),
          ),
        }
      }],
    }).compile();

    controller = module.get<PosterController>(PosterController);
    service = module.get<PosterService>(PosterService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll()', () => {
    it('should find all poster', () => {
      controller.findAll();
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne()', () => {
    it('should find a poster', () => {
      controller.findOne(1);
      expect(service.findOne).toHaveBeenCalled();
      expect(controller.findOne(0)).resolves.toEqual(postersArr[0]);
      expect(controller.findOne(1)).resolves.toEqual(postersArr[1]);
      expect(controller.findOne(2)).resolves.toEqual(postersArr[2]);
    });
  });
});
