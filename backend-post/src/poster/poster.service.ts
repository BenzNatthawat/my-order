import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Poster } from 'src/entities/poster.entity';

@Injectable()
export class PosterService {
  constructor(
    @Inject('POSTER_REPOSITORY')
    private readonly posterRepository: typeof Poster,
  ) { }

  async findAll(): Promise<Poster[]> {
    const results: Poster[] = await this.posterRepository.findAll<Poster>();
    return results
  }

  async findOne(id: number): Promise<Poster> {
    const result: Poster = await this.posterRepository.findOne<Poster>({
      where: {
        id: id
      }
    });
    if (result) {
      return result
    }
    else {
      throw new NotFoundException('Poster not fount')
    }
  }
}
