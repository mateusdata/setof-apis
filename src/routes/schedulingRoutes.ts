import { Request, Response, Router } from "express";

const schedulingRoutes = Router();

schedulingRoutes.get("/", (req: Request, res: Response)=>{
    res.send({name:"Roda de lista de afazeres"});
})

export default schedulingRoutes