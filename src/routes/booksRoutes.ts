import { Request, Response, Router } from "express";

const booksRoutes = Router();

booksRoutes.get("/", (req: Request, res: Response)=>{
    res.send({name:"Roda de lista de afazeres"});
})

export default booksRoutes