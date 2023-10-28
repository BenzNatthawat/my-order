import { Poster } from "src/entities/poster.entity";

export const posterProviders = [
  {
    provide: 'POSTER_REPOSITORY',
    useValue: Poster,
  },
];