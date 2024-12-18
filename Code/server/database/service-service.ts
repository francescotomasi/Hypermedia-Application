import {PrismaClient} from "@prisma/client";
import {Service} from "~/model/Service";
import {Testimonial} from "~/model/Testimonial";

export class ServiceService {
    prisma = new PrismaClient();

    async addService(service: Service): Promise<void> {
        await this.prisma.service.create({
            data: {
                id: service.id,
                name: service.name,
                description: service.description,
                words: service.words,
            }
        });
        for (const section of service.sections) {
            await this.prisma.section.create({
                data: {
                    serviceId: service.id,
                    section: section
                }
            });
        }
        for (let testimonial of service.testimonials) {
            await this.prisma.testimonial.create({
                data: {
                    personId: testimonial.id,
                    serviceId: service.id,
                    role: testimonial.role,
                    words: testimonial.words,
                }
            });
        }
    }

    async getService(id: number): Promise<Service> {
        const service = (await this.prisma.service.findFirst({
            where: {id: {equals: id}}
        }))!;
        const sections: string[] = (await this.prisma.section.findMany({
            where: {serviceId: {equals: id}},
            select: {section: true}
        })).map(dict => dict['section']);
        const testimonials = await this.prisma.testimonial.findMany({
            where: {serviceId: {equals: id}},
            select: {
                personId: true,
                role: true,
                words: true,
            }
        });
        return this.assignService(service, sections, testimonials);
    }

    async getServices(): Promise<Service[]> {
        const ids: number[] = (await this.prisma.service.findMany({
            select: {id: true}
        })).map(dict => dict['id']);
        let retServices: Service[] = [];
        for (const id of ids) {
            retServices.push(await this.getService(id));
        }
        return retServices;
    }

    assignService(service: {
        id: number,
        name: string,
        description: string,
        words: string
    }, sections: string[], testimonials: { personId: number, role: string, words: string }[]): Service {
        let retTestimonials: Testimonial[] = [];
        for (const testimonial of testimonials) {
            const retTestimonial: Testimonial = new Testimonial(testimonial.personId, testimonial.role, testimonial.words);
            retTestimonials.push(retTestimonial);
        }
        return new Service(service.id, service.name, service.description, sections, service.words, retTestimonials);
    }
}