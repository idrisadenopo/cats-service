import { Controller, Get, Param, ParseIntPipe, Req } from '@nestjs/common';
import { Request } from 'express';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getFiveCats() {
    return { cats: this.catsService.getRandomCats() };
  }

  @Get('/cat')
  getCat() {
    return this.catsService.getRandomCat();
  }

  @Get('favourites')
  getFavouriteCats(@Req() request: Request) {
    const userSessionId = request.session.id;
    return { cats: this.catsService.getFavouriteCats(userSessionId) };
  }

  @Get(':id')
  findCat(@Param('id', ParseIntPipe) id: number) {
    return this.catsService.findCat(id);
  }
}
