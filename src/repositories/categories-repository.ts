import { Category, CategoryParams } from '~/models'

class CategoriesRepository {
  categories: Category[] = []

  constructor() {
    this.categories = []
  }

  create({ name, description }: CategoryParams) {
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
