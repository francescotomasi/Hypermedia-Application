export class Testimonial {
    id: number;
    role: string;
    words: string;

    constructor(id: number, role: string, words: string) {
        this.id = id;
        this.role = role;
        this.words = words;
    }
}