import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCaregoriesUseCase";

class ListCategoriesController {
    
    constructor(private listCategoryUseCase: ListCategoriesUseCase) { }


    handle(request: Request, response: Response): Response{

        
        const allCategories = this.listCategoryUseCase.execute();

        return response.status(200).json(allCategories); 
    }
}

export { ListCategoriesController }