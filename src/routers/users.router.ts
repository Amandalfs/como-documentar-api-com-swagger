
import { Router } from "express";
import { Request, Response } from "express";
import { makeControllerUser } from "../factories/makeControllerUser";
import { makeControllerListUsers } from "../factories/makeControllerListUsers";
import { makeControllerUserById } from "../factories/makeControllerUserById";
const usersRoutes = Router();

usersRoutes.post("/", (req: Request, res: Response)=>{
    const controller = makeControllerUser();
    const response = controller.execute({ 
        email: req.body.email ?? '', 
        name: req.body.name ?? ''
    })
    res.status(201).json({...response})
});

usersRoutes.get("/", (req: Request, res: Response)=>{
    const controller = makeControllerListUsers();
    const response = controller.execute({})
    res.status(200).json({...response})
});

usersRoutes.delete("/:id", (req: Request, res: Response)=>{

});

usersRoutes.get("/:id", (req: Request, res: Response)=>{
    const controller = makeControllerUserById();
    const response = controller.execute({ id: req.params.id ?? ''})
    res.status(200).json({...response})
});



const routes = Router();

routes.use("/users", usersRoutes);

export { routes };
