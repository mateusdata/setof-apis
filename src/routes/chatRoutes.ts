import { Request, Response, Router } from "express";

const chatRoutes = Router();

chatRoutes.get("/", (req: Request, res: Response)=>{
    res.send({name:"Roda de lista de afazeres"});
})

export default chatRoutes