import {
  Category,
  ICategoriesRepository,
  ICategoriesRepositoryParams
} from '~/modules/cars'

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[] = []

  constructor() {
    this.categories = []
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
