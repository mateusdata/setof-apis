"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const conection_1 = require("../config/conection");
const yup = __importStar(require("yup"));
class TodolistController {
    async create(req, res) {
        const taskSchema = yup.object({
            user_id: yup.number().required(),
            title: yup.string().required(),
            description: yup.string().required()
        });
        try {
            const validate = await taskSchema.validate(req.body);
            const task = await conection_1.prisma.task.create({
                data: {
                    title: validate.title,
                    description: validate.description,
                    user_id: validate.user_id
                }
            });
            return res.send(task);
        }
        catch (error) {
            console.log(error);
            return res.status(500).send({ error: error });
        }
    }
    async index(req, res) {
        try {
            const task = await conection_1.prisma.task.findMany();
            res.send(task);
        }
        catch (error) {
            res.status(500).json({ messge: "Erro ao buscar tarefas" });
        }
    }
    async show(req, res) {
        res.send({ name: "Rota index acessada" });
    }
    async update(req, res) {
        const taskSchema = yup.object({
            title: yup.string().required(),
            description: yup.string().required()
        });
        const { id } = req.params;
        try {
            const validate = await taskSchema.validate(req.body);
            const task = await conection_1.prisma.task.update({
                data: {
                    title: validate.title,
                    description: validate.description,
                },
                where: { id: Number(id) }
            });
            return res.send(task);
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
exports.default = new TodolistController();
