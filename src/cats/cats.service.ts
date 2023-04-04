import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cat } from './dto/cat.dto';
import { sample, shuffle } from 'lodash';
import { FavouritesService } from '../favourites/favourites.service';

@Injectable()
export class CatsService {
  constructor(
    private configService: ConfigService,
    private favouritesService: FavouritesService,
  ) {}

  private imageBaseUrl = this.configService.get('IMAGE_BASE_URL');

  private cats: Cat[] = [
    {
      id: 1,
      name: 'Leone',
      url: this.imageBaseUrl + '/public/IMG_7960.JPG',
    },
    {
      id: 2,
      name: 'Leila',
      url: this.imageBaseUrl + '/public/IMG_7966.JPG',
    },
    {
      id: 3,
      name: 'Priscilla',
      url: this.imageBaseUrl + '/public/IMG_7963.JPG',
    },
    {
      id: 4,
      name: 'LadyK',
      url: this.imageBaseUrl + '/public/IMG_7965.JPG',
    },
    {
      id: 5,
      name: 'Thomas',
      url: this.imageBaseUrl + '/public/IMG_7969.JPG',
    },
    {
      id: 6,
      name: 'Robin',
      url: this.imageBaseUrl + '/public/IMG_7968.JPG',
    },
    {
      id: 7,
      name: 'Askalad',
      url: this.imageBaseUrl + '/public/IMG_7964.JPG',
    },
    {
      id: 8,
      name: 'Tim',
      url: this.imageBaseUrl + '/public/IMG_7959.JPG',
    },
    {
      id: 9,
      name: 'Fluffy',
      url: this.imageBaseUrl + '/public/IMG_7962.JPG',
    },
    {
      id: 10,
      name: 'Louis',
      url: this.imageBaseUrl + '/public/IMG_7961.JPG',
    },
    {
      id: 11,
      name: 'Husky',
      url: this.imageBaseUrl + '/public/IMG_5790.JPG',
    },
    {
      id: 12,
      name: 'Moana',
      url: this.imageBaseUrl + '/public/IMG_7958.JPG',
    },
    {
      id: 13,
      name: 'Granny',
      url: this.imageBaseUrl + '/public/IMG_7967.JPG',
    },
    {
      id: 14,
      name: 'Yoga',
      url: this.imageBaseUrl + '/public/IMG_7970.JPG',
    },
    {
      id: 15,
      name: 'Nostalgia',
      url: this.imageBaseUrl + '/public/IMG_7971.JPG',
    },
    {
      id: 16,
      name: 'Beethoven',
      url: this.imageBaseUrl + '/public/IMG_7972.JPG',
    },
    {
      id: 17,
      name: 'Esmeralda',
      url: this.imageBaseUrl + '/public/IMG_7973.JPG',
    },
    {
      id: 18,
      name: 'Jackson',
      url: this.imageBaseUrl + '/public/IMG_7974.JPG',
    },
    {
      id: 19,
      name: 'Newton',
      url: this.imageBaseUrl + '/public/IMG_7975.JPG',
    },
    {
      id: 20,
      name: 'Aesthetic',
      url: this.imageBaseUrl + '/public/IMG_7976.JPG',
    },
    {
      id: 21,
      name: 'Cuddly',
      url: this.imageBaseUrl + '/public/IMG_7977.JPG',
    },
    {
      id: 22,
      name: 'The horror',
      url: this.imageBaseUrl + '/public/IMG_7978.JPG',
    },
    {
      id: 23,
      name: 'Modanisa',
      url: this.imageBaseUrl + '/public/IMG_7979.JPG',
    },
    {
      id: 24,
      name: 'Henry the second',
      url: this.imageBaseUrl + '/public/IMG_7980.JPG',
    },
    {
      id: 25,
      name: 'Daisy',
      url: this.imageBaseUrl + '/public/IMG_7981.JPG',
    },
    {
      id: 26,
      name: 'Felipe',
      url: this.imageBaseUrl + '/public/IMG_7982.JPG',
    },
    {
      id: 27,
      name: 'Marcus',
      url: this.imageBaseUrl + '/public/IMG_7983.JPG',
    },
    {
      id: 28,
      name: 'Eva',
      url: this.imageBaseUrl + '/public/IMG_7984.JPG',
    },
    {
      id: 29,
      name: 'Vlad',
      url: this.imageBaseUrl + '/public/IMG_7985.JPG',
    },
    {
      id: 30,
      name: 'Snowball',
      url: this.imageBaseUrl + '/public/IMG_7986.JPG',
    },
    {
      id: 31,
      name: 'Emerald',
      url: this.imageBaseUrl + '/public/IMG_7987.JPG',
    },
    {
      id: 32,
      name: 'Allison',
      url: this.imageBaseUrl + '/public/IMG_7988.JPG',
    },
    {
      id: 33,
      name: 'Monkey',
      url: this.imageBaseUrl + '/public/IMG_7989.JPG',
    },
    {
      id: 34,
      name: 'Lazy',
      url: this.imageBaseUrl + '/public/IMG_7990.JPG',
    },
    {
      id: 35,
      name: 'The thinker',
      url: this.imageBaseUrl + '/public/IMG_7991.JPG',
    },
    {
      id: 36,
      name: 'Snoop cat',
      url: this.imageBaseUrl + '/public/IMG_7992.JPG',
    },
    {
      id: 37,
      name: 'Your majesty',
      url: this.imageBaseUrl + '/public/IMG_7993.JPG',
    },
    {
      id: 38,
      name: 'Dora',
      url: this.imageBaseUrl + '/public/IMG_7994.JPG',
    },
    {
      id: 39,
      name: 'Yoyo',
      url: this.imageBaseUrl + '/public/IMG_7995.JPG',
    },
    {
      id: 40,
      name: 'Elizabeth',
      url: this.imageBaseUrl + '/public/IMG_7996.JPG',
    },
    {
      id: 41,
      name: 'Romance',
      url: this.imageBaseUrl + '/public/IMG_7997.JPG',
    },
    {
      id: 42,
      name: 'Florist',
      url: this.imageBaseUrl + '/public/IMG_7998.JPG',
    },
    {
      id: 43,
      name: 'Snooze',
      url: this.imageBaseUrl + '/public/IMG_7999.JPG',
    },
    {
      id: 44,
      name: 'Selfie',
      url: this.imageBaseUrl + '/public/IMG_8001.JPG',
    },
    {
      id: 45,
      name: 'Miss Patel',
      url: this.imageBaseUrl + '/public/IMG_8002.JPG',
    },
    {
      id: 46,
      name: 'Tiger',
      url: this.imageBaseUrl + '/public/IMG_8003.JPG',
    },
    {
      id: 47,
      name: 'Bloop',
      url: this.imageBaseUrl + '/public/IMG_8004.JPG',
    },
    {
      id: 48,
      name: 'Mumzy',
      url: this.imageBaseUrl + '/public/IMG_8005.JPG',
    },
    {
      id: 49,
      name: 'Randagio',
      url: this.imageBaseUrl + '/public/IMG_8007.JPG',
    },
    {
      id: 50,
      name: 'Fufi',
      url: this.imageBaseUrl + '/public/IMG_8008.JPG',
    },
    {
      id: 51,
      name: 'Bonny',
      url: this.imageBaseUrl + '/public/IMG_8009.JPG',
    },
  ];

  private getUserNonFavouriteCats(userSessionId: string) {
    const favourites = this.favouritesService.findAll(userSessionId);
    console.log('favourite cats', favourites);
    if (favourites.length > 0) {
      const filteredCats = this.cats.filter((cat) => {
        const found = favourites.some((favourite) => {
          return favourite.catId === cat.id;
        });
        return !found;
      });
      console.log('filteredCats', filteredCats);
      return filteredCats;
    }
    return this.cats;
  }

  getRandomCat(userSessionId: string) {
    const filteredCats = this.getUserNonFavouriteCats(userSessionId);
    return sample(filteredCats);
  }

  getRandomCats(userSessionId: string) {
    const filteredCats = this.getUserNonFavouriteCats(userSessionId);
    const shuffledCats = shuffle(filteredCats);
    return shuffledCats.slice(0, 5);
  }

  findCat(id: number) {
    return this.cats.find((cat) => cat.id === id);
  }

  getFavouriteCats(userSessionId: string) {
    const favourites = this.favouritesService.findAll(userSessionId);
    return favourites.map<Cat>((favourite) => {
      const cat = this.cats.find((cat) => cat.id === favourite.catId);
      return {
        id: cat.id,
        name: cat.name,
        url: cat.url,
      };
    });
  }
}
