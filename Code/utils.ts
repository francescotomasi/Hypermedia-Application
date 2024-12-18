import {Person} from "~/model/Person";
import {Socials} from "~/model/Socials";
import {Project} from "~/model/Project";
import {Service} from "~/model/Service";
import {Testimonial} from "~/model/Testimonial";

export function assignPeople(people: Person[]): Person[] {
    let retPeople: Person[] = [];
    for (let person of people) {
        retPeople.push(assignPerson(person));
    }
    return retPeople;
}

export function assignPerson(person: Person) {
    let newSocials: Socials = new Socials(person.socials.linkedin, person.socials.twitter, person.socials.instagram, person.socials.facebook);
    return new Person(person.id, person.name, person.description, newSocials, person.experiences, person.projects, person.services);
}

export function assignProjects(projects: Project[]): Project[] {
    let retProjects: Project[] = [];
    for (let project of projects) {
        retProjects.push(assignProject(project));
    }
    return retProjects;
}

export function assignProject(project: Project): Project {
    return new Project(project.id, project.name, project.description, project.longDes, project.leader);
}

export function assignServices(services: Service[]) {
    let retServices: Service[] = [];
    for (let service of services) {
        retServices.push(assignService(service));
    }
    return retServices;
}

export function assignService(service: Service) {
    let newTestimonials: Testimonial[] = assignTestimonials(service.testimonials);
    return new Service(service.id, service.name, service.description, service.sections, service.words, newTestimonials);
}

export function assignTestimonials(testimonials: Testimonial[]): Testimonial[] {
    let retTestimonials: Testimonial[] = [];
    for (let testimonial of testimonials) {
        retTestimonials.push(assignTestimonial(testimonial));
    }
    return retTestimonials;
}

export function assignTestimonial(testimonial: Testimonial): Testimonial {
    return new Testimonial(testimonial.id, testimonial.role, testimonial.words);
}