"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conection_1 = require("../config/conection");
const userSchema_1 = require("../schema/userSchema");
class UserController {
    async create(req, res) {
        try {
            const validate = await userSchema_1.userSchema.validate(req.body);
            const user = await conection_1.prisma.user.create({
                data: {
                    name: validate.name,
                    email: validate.email,
                }
            });
            return res.send(user);
        }
        catch (error) {
            console.log(error);
            return res.status(500).send({ error: error });
        }
    }
    async index(req, res) {
        try {
            const user = await conection_1.prisma.user.findMany();
            res.send(user);
        }
        catch (error) {
            res.status(500).json({ messge: "Erro ao buscar tarefas" });
        }
    }
    async show(req, res) {
        res.send({ name: "Rota index acessada" });
    }
    async update(req, res) {
        const { id } = req.params;
        try {
            const validate = await userSchema_1.userSchema.validate(req.body);
            const user = await conection_1.prisma.user.update({
                data: {
                    name: validate.name,
                    email: validate.email,
                },
                where: { id: Number(id) }
            });
            return res.send(user);
        }
        catch (error) {
            console.log(error);
            return res.status(500).send({ error: error });
        }
    }
    async delete(req, res) {
        res.send({ name: "Rota index acessada" });
    }
}
exports.default = new UserController();
