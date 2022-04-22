import {
  Specification,
  ISpecificationsRepository,
  ISpecificationsRepositoryParams
} from '~/modules/cars'

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[] = []

  constructor() {
    this.specifications = []
  }

  create({ name, description }: ISpecificationsRepositoryParams) {
    const specification = new Specification({ name, description })

    this.specifications.push(specification)
  }

  findByName(name: string): Specification | undefined {
    return this.specifications.find(
      specification => specification.name === name
    )
  }
}

export { SpecificationsRepository }
