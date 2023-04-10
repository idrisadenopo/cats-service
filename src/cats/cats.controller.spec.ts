import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { FavouritesService } from '../favourites/favourites.service';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { Request } from 'express';

describe('CatsController', () => {
  let controller: CatsController;
  const request = { session: { id: 'abc123' } };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsService, ConfigService, FavouritesService],
      controllers: [CatsController],
    }).compile();

    controller = module.get<CatsController>(CatsController);
  });

  describe('cats', () => {
    it('should return 5 cats', () => {
      expect(controller.getFiveCats(request as Request).cats.length).toBe(5);
    });
  });

  describe('cat', () => {
    it('should return 1 cat', () => {
      const cat = controller.getCat(request as Request);
      expect(cat).toHaveProperty('id');
      expect(cat).toHaveProperty('name');
      expect(cat).toHaveProperty('imageData');
    });
  });

  describe(':id', () => {
    it('should return cat with id', () => {
      expect(controller.findCat(3)).toHaveProperty('id', 3);
    });
  });
});
