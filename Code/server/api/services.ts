import {ServiceService} from "~/server/database/service-service";
import {Service} from "~/model/Service";

const serviceService: ServiceService = new ServiceService();

export default defineEventHandler(async (event) => {
    const s: Service[] = await serviceService.getServices();
    return {
        services: JSON.stringify(s)
    }
})