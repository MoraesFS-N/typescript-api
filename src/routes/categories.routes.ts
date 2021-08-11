import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoryRespository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {

    const { name, description } = request.body;

    const categoryAlreadyExists = categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
        return response.status(400).json({error: 'Categoria já existente'});
    }
     
    categoriesRepository.create({name, description});

    return response.status(201).send({message: 'Categoria adicionada com sucesso.'});
});


categoriesRoutes.get("/", (request, response) => {

    const allCategories = categoriesRepository.listCategories();

    return response.status(200).json(allCategories); 
});


export { categoriesRoutes };