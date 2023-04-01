import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FavouritesModule } from 'src/favourites/favourites.module';
import { FavouritesService } from 'src/favourites/favourites.service';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  imports: [ConfigModule, FavouritesModule],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
