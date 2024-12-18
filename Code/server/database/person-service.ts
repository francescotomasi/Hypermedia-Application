import {PrismaClient} from "@prisma/client";
import {Person} from "~/model/Person"
import {Socials} from "~/model/Socials";
import {Experience} from "~/model/Experience";

export class PersonService {
    prisma = new PrismaClient();

    async addPerson(person: Person): Promise<void> {
        await this.prisma.person.create({
            data: {
                id: person.id,
                name: person.name,
                description: person.description,
                linkedin: person.socials.linkedin,
                twitter: person.socials.twitter,
                instagram: person.socials.instagram,
                facebook: person.socials.facebook,
            }
        });
        for (const experience of person.experiences) {
            await this.prisma.experience.create({
                data: {
                    personId: person.id,
                    title: experience.title,
                    location: experience.location,
                    time: experience.time,
                    description: experience.description,
                }
            })
        }
    }

    async addTestimonialPerson(id: number, name: string): Promise<void> {
        await this.prisma.testimonialPerson.create({
            data: {
                id: id,
                name: name,
            }
        })
    }

    async getPerson(id: number): Promise<Person> {
        const person = (await this.prisma.person.findFirst({
            where: {id: {equals: id}}
        }))!;

        const experiences: Experience[] = (await this.prisma.experience.findMany({
            where: {personId: {equals: id}},
            select: {title: true, location: true, time: true, description: true}
        })).map(dict => new Experience(dict['title'], dict['location'], dict['time'], dict['description']));

        const projects: number[] = (await this.prisma.project.findMany({
            where: {leaderId: {equals: id}},
            select: {id: true}
        })).map(dict => dict['id']);

        const services: number[] = (await this.prisma.testimonial.findMany({
            where: {
                personId: {equals: id},
                role: {equals: 'Responsible of the Service'}
            },
            select: {serviceId: true}
        })).map(dict => dict['serviceId']);

        return this.assignPeople(person, experiences, projects, services);
    }

    async getTestimonialPerson(id: number): Promise<string> {
        const person = await this.prisma.testimonialPerson.findFirst({
            where: {id: {equals: id}}
        });
        return person!.name;
    }

    async getPeople(): Promise<Person[]> {
        const ids: number[] = (await this.prisma.person.findMany({
            select: {id: true}
        })).map(dict => dict['id']);
        let retPeople: Person[] = [];
        for (const id of ids) {
            retPeople.push(await this.getPerson(id));
        }
        return retPeople;
    }

    async getTestimonialPeople(): Promise<{ [key: number]: string }> {
        const people = (await this.prisma.testimonialPerson.findMany());
        return people.reduce((acc, items) => {
            acc[items.id] = items.name;
            return acc;
        }, {} as { [key: number]: string });
    }

    assignPeople(person: {
        id: number,
        name: string,
        description: string,
        linkedin: string,
        twitter: string,
        instagram: string,
        facebook: string
    }, experiences: Experience[], projects: number[], services: number[]): Person {
        const socials: Socials = new Socials(person.linkedin, person.twitter, person.instagram, person.facebook);
        return new Person(person.id, person.name, person.description, socials, experiences, projects, services);
    }
}