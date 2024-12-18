export class Experience {
    title: string;
    location: string;
    time: string;
    description: string;

    constructor(title: string, location: string, time: string, description: string) {
        this.title = title;
        this.location = location;
        this.time = time;
        this.description = description;
    }
}