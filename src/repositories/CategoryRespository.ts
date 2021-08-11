import { Category } from "../model/Category";

interface ICreateCategoryDTO{
    name: string;
    description: string;
}

class CategoriesRepository {
    
    private categories: Category[];

    constructor(){
        this.categories = [];
    }

    create({ description, name } : ICreateCategoryDTO): void{

        const category = new Category();
        const created_at = new Date();
        
        Object.assign(category, {
            name,
            description,
            created_at
        });

        this.categories.push(category);
    }

    listCategories(): Category[]{

        return this.categories;
    }

    findByName(name: string): Category{

        const category = this.categories.find(category => category.name === name);
        
        return category;
    }

}

export { CategoriesRepository }