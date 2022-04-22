import {
  ISpecificationsRepositoryParams,
  ISpecificationsRepository
} from '~/modules/cars'

class CreateSpecificationUseCase {
  private specificationsRepository: ISpecificationsRepository

  constructor(specificationsRepository: ISpecificationsRepository) {
    this.specificationsRepository = specificationsRepository
  }

  execute({ name, description }: ISpecificationsRepositoryParams): void {
    const SpecificationAlreadyExists =
      this.specificationsRepository.findByName(name)

    if (SpecificationAlreadyExists)
      throw new Error('Specification already exists')

    this.specificationsRepository.create({ name, description })
  }
}

export { CreateSpecificationUseCase }
