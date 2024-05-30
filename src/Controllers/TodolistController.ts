import { Request, Response } from "express";
import { prisma } from "../config/conection";
import * as yup from "yup";
import { z } from "zod";
import { taskSchema } from "../schema/TaskSchema";

class TodolistController {

    async create(req: Request, res: Response) {              

        try {
            const validate =  taskSchema.parse(req.body)
            const task = await prisma.task.create({
                data: {
                    title: validate.title,
                    description: validate.description,
                    user_id: validate.user_id
                }
            });

            return res.send(task);
        } catch (error) {
            console.log(error)
            return res.status(500).send({ error: error });
        }
    }

    async index(req: Request, res: Response) {
        try {
            const task = await prisma.task.findMany()
            res.send(task)
        } catch (error) {
            res.status(500).json({ messge: "Erro ao buscar tarefas" })
        }

    }

    async show(req: Request, res: Response) {
        res.send({ name: "Rota index acessada" })
    }

    async update(req: Request, res: Response) {

        const taskSchema = z.object({
            title: z.string(),
            description: z.string()
        })
        const { id }: any = req.params;


        try {
            const validate =  taskSchema.parse(req.body)

            const task = await prisma.task.update({
                data: {
                    title: validate.title,
                    description: validate.description,
                },
                where: { id: Number(id) }
            });

            return res.send(task);
        } catch (error) {
            console.log(error)
            return res.status(500).send({ error: error });
        }

    }

    async delete(req: Request, res: Response) {
        res.send({ name: "Rota index acessada" })
    }
}
export default new TodolistController();