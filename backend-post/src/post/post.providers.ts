import { Post } from "src/entities/post.entity";

export const postProviders = [
  {
    provide: 'POST_REPOSITORY',
    useValue: Post,
  },
];