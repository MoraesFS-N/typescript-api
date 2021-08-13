import { CategoriesRepository } from "../repositories/CategoryRespository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    
    constructor( private categoriesRepository: CategoriesRepository ) { }

    execute({name, description} : IRequest): void {
        

        const categoryAlreadyExists = this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Categoria já existente");
        }
     
        this.categoriesRepository.create({name, description});

    }
}


export { CreateCategoryService }