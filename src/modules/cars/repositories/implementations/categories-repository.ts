import {
  Category,
  ICategoriesRepository,
  ICategoriesRepositoryParams
} from '~/modules/cars'

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[] = []

  private static INSTANCE: CategoriesRepository

  private constructor() {
    this.categories = []
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository()
    }

    return CategoriesRepository.INSTANCE
  }

  create({ name, description }: ICategoriesRepositoryParams) {
    const category = new Category({ name, description })

    this.categories.push(category)
  }

  list(): Category[] {
    return this.categories
  }

  findByName(name: string): Category | undefined {
    return this.categories.find(category => category.name === name)
  }
}

export { CategoriesRepository }
