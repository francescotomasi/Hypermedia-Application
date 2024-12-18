import {Socials} from "~/model/Socials";
import type {Experience} from "~/model/Experience";

export class Person {
    id: number;
    name: string;
    description: string;
    socials: Socials;
    experiences: Experience[];
    projects: number[];
    services: number[];

    constructor(id: number, name: string, description: string="", socials: Socials=new Socials(), experiences: Experience[] = [], projects: number[] = [], services: number[] = []) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.socials = socials;
        this.experiences = experiences;
        this.projects = projects;
        this.services = services;
    }

    addExperience(exp: Experience): void {
        this.experiences.push(exp);
    }

    addProject(p: number): void {
        this.projects.push(p);
    }

    addService(s: number): void {
        this.services.push(s);
    }
}