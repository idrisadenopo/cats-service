import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get('/cats')
  getFiveCats() {
    return this.catsService.getRandomCats();
  }

  @Get('/cat')
  getCat() {
    return this.catsService.getRandomCat();
  }

  @Get(':id')
  findCat(@Param('id', ParseIntPipe) id: number) {
    return this.catsService.findCat(id);
  }
}
