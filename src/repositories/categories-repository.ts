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
}

export { CategoriesRepository }
