import { PostEntity } from "../entities/post.entity";

export const postProviders = [
  {
    provide: 'POST_REPOSITORY',
    useValue: PostEntity,
  },
];