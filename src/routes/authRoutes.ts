import { Request, Response, Router } from "express";

const authRoutes = Router();

authRoutes.get("/", (req: Request, res: Response)=>{
    res.send({name:"Roda de lista de afazeres"});
})

export default authRoutes