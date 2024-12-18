import {Person} from "~/model/Person";
import {PersonService} from "~/server/database/person-service";

const personService = new PersonService();

export default defineEventHandler(async (event) => {
    const id: number = parseInt(getRouterParam(event, 'id')!);
    if (id < 100) {
        const p: Person = await personService.getPerson(id);
        return {
            person: JSON.stringify(p)
        }
    } else {
        const p: string = await personService.getTestimonialPerson(id);
        return {
            person: p
        }
    }
});