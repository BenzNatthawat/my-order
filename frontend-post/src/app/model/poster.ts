export class Poster {
    id: number | null;
    title: string;
    image: string;

    constructor(poster: Partial<Poster> = {}) {
        this.id = poster?.id || null;
        this.title = poster?.title || '';
        this.image = poster?.image || '';
    }
}

