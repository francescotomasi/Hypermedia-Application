export class Project {
    id: number;
    name: string;
    description: string;
    longDes: string;
    leader: number;

    constructor(id: number, name: string, description: string = "", longDes: string = "", leader: number = 0) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.longDes = longDes;
        this.leader = leader;
    }
}