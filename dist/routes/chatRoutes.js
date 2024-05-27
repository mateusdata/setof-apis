"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chatRoutes = (0, express_1.Router)();
chatRoutes.get("/", (req, res) => {
    res.send({ name: "Roda de lista de afazeres" });
});
exports.default = chatRoutes;