
import { Router } from "express";
import { Request, Response } from "express";
import { makeControllerUser } from "../factories/makeControllerUser";
import { makeControllerListUsers } from "../factories/makeControllerListUsers";
import { makeControllerUserById } from "../factories/makeControllerUserById";
import { makeControllerDeleteUser } from "../factories/makeControllerDeleteUser";
const usersRoutes = Router();

usersRoutes.post("/", (req: Request, res: Response)=>{
    try {
        const controller = makeControllerListUsers();
        const response = controller.execute({})
        return res.status(200).json({...response})
    } catch (error) {
        if(error.status && error.message){
            return res.status(error.status).json({message: error.message})
        } else {
            return res.status(500).json({ message: "Internal Server Error"})
        }
    }
})

usersRoutes.get("/", (req: Request, res: Response)=>{
    try {
        const controller = makeControllerListUsers();
        const response = controller.execute({})
        res.status(200).json({...response})
    } catch (error) {
        if(error.status && error.message){
            return res.status(error.status).json({message: error.message})
        } else {
            return res.status(500).json({ message: "Internal Server Error"})
        }
    }
});

usersRoutes.delete("/:id", (req: Request, res: Response)=>{
    try {        
        const controller = makeControllerDeleteUser();
        const response = controller.execute({ id: req.params.id ?? ''})
        res.status(200).json({...response})
    } catch (error) {
        if(error.status && error.message){
            return res.status(error.status).json({message: error.message})
        } else {
            return res.status(500).json({ message: "Internal Server Error"})
        }
    }
});

usersRoutes.get("/:id", (req: Request, res: Response)=>{
    try {
        const controller = makeControllerUserById();
        const response = controller.execute({ id: req.params.id ?? ''})
        res.status(200).json({...response})
    } catch (error) {
        if(error.status && error.message){
            return res.status(error.status).json({message: error.message})
        } else {
            return res.status(500).json({ message: "Internal Server Error"})
        }
    }
});



const routes = Router();

routes.use("/users", usersRoutes);

export { routes };
