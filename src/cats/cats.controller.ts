import { Controller, Get, Param, ParseIntPipe, Req } from '@nestjs/common';
import { Request } from 'express';
import { CatsService } from './cats.service';
import { Cats } from './dto/cats.dto';
import { Cat } from './dto/cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  /**
   * Gets five random cats which are not already in the user's favourites
   * @param request
   * @returns
   */
  @Get()
  getFiveCats(@Req() request: Request): Cats {
    const userSessionId = request.session.id;
    return { cats: this.catsService.getRandomCats(userSessionId) };
  }

  /**
   * Gets a random cat which is not already in the user's favourites
   * @param request
   * @returns
   */
  @Get('/cat')
  getCat(@Req() request: Request): Cat {
    const userSessionId = request.session.id;
    return this.catsService.getRandomCat(userSessionId);
  }

  /**
   * Gets a user's favourite cats
   * @param request
   * @returns
   */
  @Get('favourites')
  getFavouriteCats(@Req() request: Request): Cats {
    const userSessionId = request.session.id;
    return { cats: this.catsService.getFavouriteCats(userSessionId) };
  }

  /**
   * Gets a cat by its id
   * @param id
   * @returns
   */
  @Get(':id')
  findCat(@Param('id', ParseIntPipe) id: number): Cat {
    return this.catsService.findCat(id);
  }
}
