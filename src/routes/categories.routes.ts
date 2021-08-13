import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/CategoryRespository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {

    const { name, description } = request.body;

    const createCategoryService = new CreateCategoryService(categoriesRepository);

    createCategoryService.execute({name: name, description: description})

    return response.status(201).send({message: 'Categoria adicionada com sucesso.'});
});


categoriesRoutes.get("/", (request, response) => {

    const allCategories = categoriesRepository.list();

    return response.status(200).json(allCategories); 
});


export { categoriesRoutes };