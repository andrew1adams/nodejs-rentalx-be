import { CategoriesRepository, Category } from '~/modules/cars'

class ListCategoriesUseCase {
  categoriesRepository: CategoriesRepository

  constructor(categoriesRepository: CategoriesRepository) {
    this.categoriesRepository = categoriesRepository
  }

  execute(): Category[] {
    return this.categoriesRepository.list()
  }
}

export { ListCategoriesUseCase }
