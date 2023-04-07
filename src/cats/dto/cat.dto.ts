import { ImageData } from './image.dto';

export class Cat {
  /**
   * The id of the cat
   * @example 1
   */
  id: number;
  /**
   * The name of the cat
   * @example Leone
   */
  name: string;
  /**
   * Data for loading the cat image
   */
  imageData: ImageData;
}
