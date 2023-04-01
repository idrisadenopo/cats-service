import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cat } from './interfaces/cat.interface';
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
      url: this.imageBaseUrl + 'pexels-evg-kowalievska-1170986.jpg',
    },
    {
      id: 2,
      name: 'Leila',
      url: this.imageBaseUrl + 'pexels-alena-koval-982300.jpg',
    },
    {
      id: 3,
      name: 'Maurice',
      url: this.imageBaseUrl + 'pexels-cong-h-1404819.jpg',
    },
    {
      id: 4,
      name: 'LadyK',
      url: this.imageBaseUrl + 'pexels-dominika-roseclay-977935.jpg',
    },
    {
      id: 5,
      name: 'Thomas',
      url: this.imageBaseUrl + 'pexels-dominika-roseclay-2686914.jpg',
    },
    {
      id: 6,
      name: 'Robin',
      url: this.imageBaseUrl + 'pexels-guillaume-meurice-1317844.jpg',
    },
    {
      id: 7,
      name: 'Askalad',
      url: this.imageBaseUrl + 'pexels-just-a-couple-photos-3777622.jpg',
    },
    {
      id: 8,
      name: 'Tim',
      url: this.imageBaseUrl + 'pexels-lina-kivaka-1741206.jpg',
    },
    {
      id: 9,
      name: 'Fluffy',
      url: this.imageBaseUrl + 'pexels-matteo-petralli-1828875.jpg',
    },
    {
      id: 10,
      name: 'Louis',
      url: this.imageBaseUrl + 'pexels-peng-louis-1643457.jpg',
    },
  ];

  getRandomCat() {
    return sample(this.cats);
  }

  getRandomCats() {
    const shuffledCats = shuffle(this.cats);
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
