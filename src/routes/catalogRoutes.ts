import { Request, Response, Router } from "express";

const catalogRoutes = Router();

catalogRoutes.get("/", (req: Request, res: Response)=>{
    res.send({name:"Roda de lista de afazeres"});
})

export default catalogRoutes