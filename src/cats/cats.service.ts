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

  private cats: Cat[] = [
    {
      id: 1,
      name: 'Leone',
      imageData: {
        urlPath: '/IMG_7960.JPG',
        width: 640,
        height: 960,
      },
    },
    {
      id: 2,
      name: 'Leila',
      imageData: {
        urlPath: '/IMG_7966.JPG',
        width: 640,
        height: 856,
      },
    },
    {
      id: 3,
      name: 'Priscilla',
      imageData: {
        urlPath: '/IMG_7963.JPG',
        width: 640,
        height: 427,
      },
    },
    {
      id: 4,
      name: 'LadyK',
      imageData: {
        urlPath: '/IMG_7965.JPG',
        width: 640,
        height: 945,
      },
    },
    {
      id: 5,
      name: 'Thomas',
      imageData: {
        urlPath: '/IMG_7969.JPG',
        width: 640,
        height: 907,
      },
    },
    {
      id: 6,
      name: 'Robin',
      imageData: {
        urlPath: '/IMG_7968.JPG',
        width: 640,
        height: 720,
      },
    },
    {
      id: 7,
      name: 'Askalad',
      imageData: {
        urlPath: '/IMG_7964.JPG',
        width: 640,
        height: 960,
      },
    },
    {
      id: 8,
      name: 'Tim',
      imageData: {
        urlPath: '/IMG_7959.JPG',
        width: 640,
        height: 960,
      },
    },
    {
      id: 9,
      name: 'Fluffy',
      imageData: {
        urlPath: '/IMG_7962.JPG',
        width: 640,
        height: 960,
      },
    },
    {
      id: 10,
      name: 'Louis',
      imageData: {
        urlPath: '/IMG_7961.JPG',
        width: 640,
        height: 960,
      },
    },
    {
      id: 11,
      name: 'Husky',
      imageData: {
        urlPath: '/IMG_5790.JPG',
        width: 3024,
        height: 4032,
      },
    },
    {
      id: 12,
      name: 'Bonny',
      imageData: {
        urlPath: '/IMG_7958.JPG',
        width: 640,
        height: 960,
      },
    },
    {
      id: 13,
      name: 'Moana',
      imageData: {
        urlPath: '/IMG_7967.JPG',
        width: 640,
        height: 640,
      },
    },
    {
      id: 14,
      name: 'Granny',
      imageData: {
        urlPath: '/IMG_7970.JPG',
        width: 640,
        height: 960,
      },
    },
    {
      id: 15,
      name: 'Yoga',
      imageData: {
        urlPath: '/IMG_7971.JPG',
        width: 640,
        height: 960,
      },
    },
    {
      id: 16,
      name: 'Nostalgia',
      imageData: {
        urlPath: '/IMG_7972.JPG',
        width: 640,
        height: 894,
      },
    },
    {
      id: 17,
      name: 'Bethoven',
      imageData: {
        urlPath: '/IMG_7973.JPG',
        width: 640,
        height: 960,
      },
    },
    {
      id: 18,
      name: 'Esmeralda',
      imageData: {
        urlPath: '/IMG_7974.JPG',
        width: 640,
        height: 960,
      },
    },
    {
      id: 19,
      name: 'Jackson',
      imageData: {
        urlPath: '/IMG_7975.JPG',
        width: 640,
        height: 959,
      },
    },
    {
      id: 20,
      name: 'Newton',
      imageData: {
        urlPath: '/IMG_7976.JPG',
        width: 640,
        height: 960,
      },
    },
    {
      id: 21,
      name: 'Aesthetic',
      imageData: {
        urlPath: '/IMG_7977.JPG',
        width: 640,
        height: 853,
      },
    },
    {
      id: 22,
      name: 'Cuddly',
      imageData: {
        urlPath: '/IMG_7978.JPG',
        width: 640,
        height: 427,
      },
    },
    {
      id: 23,
      name: 'The Horror',
      imageData: {
        urlPath: '/IMG_7979.JPG',
        width: 640,
        height: 427,
      },
    },
    {
      id: 24,
      name: 'Modanisa',
      imageData: {
        urlPath: '/IMG_7980.JPG',
        width: 640,
        height: 837,
      },
    },
    {
      id: 25,
      name: 'Lizzy',
      imageData: {
        urlPath: '/IMG_7981.JPG',
        width: 640,
        height: 958,
      },
    },
    {
      id: 26,
      name: 'Daisy',
      imageData: {
        urlPath: '/IMG_7982.JPG',
        width: 640,
        height: 360,
      },
    },
    {
      id: 27,
      name: 'Felipe',
      imageData: {
        urlPath: '/IMG_7983.JPG',
        width: 640,
        height: 427,
      },
    },
    {
      id: 28,
      name: 'Marcus',
      imageData: {
        urlPath: '/IMG_7984.JPG',
        width: 640,
        height: 1138,
      },
    },
    {
      id: 29,
      name: 'Eva',
      imageData: {
        urlPath: '/IMG_7985.JPG',
        width: 640,
        height: 855,
      },
    },
    {
      id: 30,
      name: 'Vlad',
      imageData: {
        urlPath: '/IMG_7986.JPG',
        width: 640,
        height: 815,
      },
    },
    {
      id: 31,
      name: 'Snowball',
      imageData: {
        urlPath: '/IMG_7987.JPG',
        width: 640,
        height: 480,
      },
    },
    {
      id: 32,
      name: 'Emerald',
      imageData: {
        urlPath: '/IMG_7988.JPG',
        width: 640,
        height: 960,
      },
    },
    {
      id: 33,
      name: 'Allison',
      imageData: {
        urlPath: '/IMG_7989.JPG',
        width: 640,
        height: 981,
      },
    },
    {
      id: 34,
      name: 'Monkey',
      imageData: {
        urlPath: '/IMG_7990.JPG',
        width: 640,
        height: 971,
      },
    },
    {
      id: 35,
      name: 'Lazy',
      imageData: {
        urlPath: '/IMG_7991.JPG',
        width: 640,
        height: 853,
      },
    },
    {
      id: 36,
      name: 'The thinker',
      imageData: {
        urlPath: '/IMG_7992.JPG',
        width: 640,
        height: 966,
      },
    },
    {
      id: 37,
      name: 'Snoop cat',
      imageData: {
        urlPath: '/IMG_7993.JPG',
        width: 640,
        height: 960,
      },
    },
    {
      id: 38,
      name: 'Your majesty',
      imageData: {
        urlPath: '/IMG_7994.JPG',
        width: 640,
        height: 960,
      },
    },
    {
      id: 39,
      name: 'Dora',
      imageData: {
        urlPath: '/IMG_7995.JPG',
        width: 640,
        height: 960,
      },
    },
    {
      id: 40,
      name: 'Yoyo',
      imageData: {
        urlPath: '/IMG_7996.JPG',
        width: 6000,
        height: 4000,
      },
    },
    {
      id: 41,
      name: 'Henry The Second',
      imageData: {
        urlPath: '/IMG_7997.JPG',
        width: 640,
        height: 853,
      },
    },
    {
      id: 42,
      name: 'Romance',
      imageData: {
        urlPath: '/IMG_7998.JPG',
        width: 640,
        height: 960,
      },
    },
    {
      id: 43,
      name: 'Florist',
      imageData: {
        urlPath: '/IMG_7999.JPG',
        width: 640,
        height: 960,
      },
    },
    {
      id: 44,
      name: 'Snooze',
      imageData: {
        urlPath: '/IMG_8001.JPG',
        width: 640,
        height: 960,
      },
    },
    {
      id: 45,
      name: 'Selfie',
      imageData: {
        urlPath: '/IMG_8002.JPG',
        width: 640,
        height: 960,
      },
    },
    {
      id: 46,
      name: 'Miss Patel',
      imageData: {
        urlPath: '/IMG_8003.JPG',
        width: 640,
        height: 960,
      },
    },
    {
      id: 47,
      name: 'Tiger',
      imageData: {
        urlPath: '/IMG_8004.JPG',
        width: 640,
        height: 960,
      },
    },
    {
      id: 48,
      name: 'Bloop',
      imageData: {
        urlPath: '/IMG_8005.JPG',
        width: 640,
        height: 800,
      },
    },
    {
      id: 49,
      name: 'Mumzy',
      imageData: {
        urlPath: '/IMG_8007.JPG',
        width: 640,
        height: 853,
      },
    },
    {
      id: 50,
      name: 'Randagio',
      imageData: {
        urlPath: '/IMG_8008.JPG',
        width: 640,
        height: 800,
      },
    },
    {
      id: 51,
      name: 'Fufi',
      imageData: {
        urlPath: '/IMG_8009.JPG',
        width: 640,
        height: 800,
      },
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
        imageData: {
          urlPath: cat.imageData.urlPath,
          height: cat.imageData.height,
          width: cat.imageData.width,
        },
      };
    });
  }
}
