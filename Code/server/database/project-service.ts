import {PrismaClient} from "@prisma/client";
import {Project} from "~/model/Project"

export class ProjectService {
    prisma = new PrismaClient();

    async addProject(project: Project): Promise<void> {
        await this.prisma.project.create({
            data: {
                id: project.id,
                name: project.name,
                description: project.description,
                longDes: project.longDes,
                leaderId: project.leader
            }
        });
    }

    async getProject(id: number): Promise<Project> {
        const project = (await this.prisma.project.findFirst({
            where: {id: {equals: id}}
        }))!;
        return this.assignProject(project);
    }

    async getProjects(): Promise<Project[]> {
        const ids: number[] = (await this.prisma.project.findMany({
            select: {id: true}
        })).map(dict => dict['id']);
        let retProjects: Project[] = [];
        for (const id of ids) {
            retProjects.push(await this.getProject(id));
        }
        return retProjects;
    }

    assignProject(project: {
        id: number,
        name: string,
        description: string,
        longDes: string,
        leaderId: number
    }): Project {
        return new Project(project.id, project.name, project.description, project.longDes, project.leaderId);
    }
}