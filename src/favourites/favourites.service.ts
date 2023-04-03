import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Favourite } from './interfaces/favourite.interface';
import { FavouriteEntity as FavouriteEntity } from './entities/favourite.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class FavouritesService {
  private favourites: FavouriteEntity[] = [];
  create(userSessionId: string, catId: number): Favourite {
    const alreadyFavourited = this.favourites.some(
      (favourite) =>
        favourite.catId === catId && favourite.userSessionId === userSessionId,
    );

    if (!alreadyFavourited) {
      const favourite: FavouriteEntity = {
        id: uuidv4(),
        catId,
        userSessionId,
      };
      this.favourites.push(favourite);
      return {
        id: favourite.id,
        catId: favourite.catId,
      };
    }
    throw new HttpException(
      {
        status: HttpStatus.CONFLICT,
        error: 'Cat has already been added to favourites',
      },
      HttpStatus.CONFLICT,
    );
  }

  findAll(userSessionId: string) {
    return this.favourites
      .filter((favourite) => favourite.userSessionId === userSessionId)
      .map<Favourite>((favourite) => {
        return { id: favourite.id, catId: favourite.catId };
      });
  }

  remove(id: string) {
    if (this.favourites.some((favourite) => favourite.id === id)) {
      this.favourites = this.favourites.filter(
        (favourite) => favourite.id !== id,
      );
    }
    return this.favourites.map<Favourite>((favourite) => {
      return { id: favourite.id, catId: favourite.catId };
    });
  }
}
