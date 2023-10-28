export class Post {
    id: number | null;
    name: string;
    post: string;
    score: number;
    edit: boolean;

    constructor(post: Partial<Post> = {}) {
        this.id = post?.id || null;
        this.name = post?.name || '';
        this.post = post?.post || '';
        this.score = post?.score || 5;
        this.edit = false;
    }
}

