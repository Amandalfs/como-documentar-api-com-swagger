
import { Router } from "express";
import { Request, Response } from "express";
import { makeControllerUser } from "../factories/makeControllerUser";
const usersRoutes = Router();

usersRoutes.post("/", (req: Request, res: Response)=>{
    const controller = makeControllerUser();
    return controller.execute({ 
        email: req.body.email ?? '', 
        name: req.body.name ?? ''
    })
});

usersRoutes.get("/", (req: Request, res: Response)=>{

});

usersRoutes.delete("/:id", (req: Request, res: Response)=>{

});

usersRoutes.get("/:id", (req: Request, res: Response)=>{

});



const routes = Router();

routes.use("/users", usersRoutes);

export { routes };
