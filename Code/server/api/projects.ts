import {ProjectService} from "~/server/database/project-service";
import {Project} from "~/model/Project";

const projectService: ProjectService = new ProjectService();

export default defineEventHandler(async (event) => {
    const p: Project[] = await projectService.getProjects();
    return {
        projects: JSON.stringify(p)
    }
})