import { Request, Response, Router } from "express";

const blogRoutes = Router();

blogRoutes.get("/", (req: Request, res: Response)=>{
    res.send({name:"Roda de lista de afazeres"});
})

export default blogRoutes