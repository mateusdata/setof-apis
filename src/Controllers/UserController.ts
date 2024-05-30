import { Request, Response } from "express";
import { prisma } from "../config/conection";
import * as yup from "yup";
import { z } from "zod";
import { userSchema } from "../schema/userSchema";

class UserController {
   

    async create(req: Request, res: Response) {
        try {
            const validate =  userSchema.parse(req.body)
            const user = await prisma.user.create({
                data: {
                    name: validate.name,
                    email: validate.email,
                }
            });

            return res.send(user);
        } catch (error) {
            console.log(error)
            return res.status(500).send({ error: error });
        }
    }

    async index(req: Request, res: Response) {
        try {
            const user = await prisma.user.findMany()
            res.send(user)
        } catch (error) {
            res.status(500).json({ messge: "Erro ao buscar tarefas" })
        }

    }

    async show(req: Request, res: Response) {
        res.send({ name: "Rota index acessada" })
    }

    async update(req: Request, res: Response) {
        const { id }: any = req.params;
        
        try {
            const validate =  userSchema.parse(req.body)

            const user = await prisma.user.update({
                data: {
                    name: validate.name,
                    email: validate.email,
                },
                where: { id: Number(id) }
            });

            return res.send(user);
        } catch (error) {
            console.log(error)
            return res.status(500).send({ error: error });
        }

    }

    async delete(req: Request, res: Response) {
        res.send({ name: "Rota index acessada" })
    }
}
export default new UserController();