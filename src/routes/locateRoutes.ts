import { Request, Response, Router } from "express";

const locateRoutes = Router();

locateRoutes.get("/", (req: Request, res: Response)=>{
    res.send({name:"Roda de lista de afazeres"});
})

export default locateRoutes