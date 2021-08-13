import { Specification } from "../model/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "./ISpecificationRepository";

class SpecificationRespository implements ISpecificationRepository {
    
    private specifications: Specification[];
    
    create({ name, description }: ICreateSpecificationDTO): void {
        
        const specification =  new Specification();

        const created_at = new Date();

        Object.assign(specification, {
            name, 
            description, 
            created_at 
        });

        this.specifications.push(specification);

    }
}

export { SpecificationRespository }