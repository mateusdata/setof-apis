"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const client_1 = require("@prisma/client");
exports.prisma = new client_1.PrismaClient();
async function connectDatabase() {
    try {
        // Tenta conectar ao banco de dados
        await exports.prisma.$connect();
        console.log("Conexão com banco de dados realizada com sucesso.");
    }
    catch (e) {
        console.error("Erro ao conectar com o banco de dados:", e);
    }
    finally {
        // Garante que a desconexão ocorra, independentemente do resultado da conexão
        await exports.prisma.$disconnect();
    }
}
exports.default = connectDatabase;
