import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Req,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { FavouritesService } from './favourites.service';
import { CreateFavourite } from './dto/create-favourite.dto';
import { Request } from 'express';
import { Favourite } from './dto/favourite.dto';
import { Favourites } from './dto/favourites.dto';

declare module 'express-session' {
  interface SessionData {
    favourites: Favourite[];
  }
}
@Controller('favourites')
export class FavouritesController {
  constructor(private readonly favouritesService: FavouritesService) {}

  /**
   * Create a favourite link between a user and a cat
   * @param createFavouriteDto
   * @param request
   * @returns
   */
  @Post()
  create(
    @Body() createFavouriteDto: CreateFavourite,
    @Req() request: Request,
  ): Favourite {
    const { id } = request.session;
    let { favourites } = request.session;
    const { catId } = createFavouriteDto;
    const alreadyFavourited = favourites?.some(
      (favourite) => favourite.catId === catId,
    );

    if (!alreadyFavourited) {
      const favourite = this.favouritesService.create(id, catId);
      if (favourites) {
        favourites.push(favourite);
      } else {
        favourites = [favourite];
      }
      request.session.favourites = favourites;
      console.log(request.session);
      return favourite;
    } else {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          error: 'Cat has already been added to favourites',
        },
        HttpStatus.CONFLICT,
      );
    }
  }

  /**
   * Gets all favourites for a user
   * @param request
   * @returns
   */
  @Get()
  findAll(@Req() request: Request): Favourites {
    const sessionId = request.session.id;
    return { favourites: this.favouritesService.findAll(sessionId) };
  }

  /**
   * Delete the link between a user and cat
   * @param id
   * @param request
   */
  @Delete(':id')
  remove(@Param('id') id: string, @Req() request: Request) {
    let { favourites } = request.session;
    if (favourites) {
      const newFavourites = this.favouritesService.remove(id);
      favourites = newFavourites;
    }
    request.session.favourites = favourites;
    console.log(request.session);
  }
}
