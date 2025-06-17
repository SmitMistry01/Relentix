import {Request, Response} from 'express';
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const getProjects = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const project = await prisma.project.findMany();
        res.json(project);
    }
    catch(error){
        res.status(500).json({message:"Error retrieving projects"});
    }
}