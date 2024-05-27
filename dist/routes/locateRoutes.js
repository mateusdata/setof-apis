"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const locateRoutes = (0, express_1.Router)();
locateRoutes.get("/", (req, res) => {
    res.send({ name: "Roda de lista de afazeres" });
});
exports.default = locateRoutes;
