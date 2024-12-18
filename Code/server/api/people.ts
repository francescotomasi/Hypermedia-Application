import {Person} from "~/model/Person";
import {PersonService} from "~/server/database/person-service";

const personService: PersonService = new PersonService();

export default defineEventHandler(async (event) => {
    const people: Person[] = await personService.getPeople();
    return {
        people: JSON.stringify(people)
    }
})