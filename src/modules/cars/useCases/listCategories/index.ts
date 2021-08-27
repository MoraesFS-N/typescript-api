import { CategoriesRepository } from "../../repositories/implementations/CategoriesRespository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCaregoriesUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoryUseCase =  new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(listCategoryUseCase);

export { listCategoriesController }