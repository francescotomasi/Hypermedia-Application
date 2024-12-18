import {PersonService} from "~/server/database/person-service";

const personService: PersonService = new PersonService();

export default defineEventHandler(async (event) => {
    const people: {[key: number]: string} = await personService.getTestimonialPeople();
    return {
        people: JSON.stringify(people)
    }
})