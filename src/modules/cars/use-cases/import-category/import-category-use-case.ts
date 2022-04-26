import fs from 'fs'
import { parse } from 'csv-parse'
import { ICategoriesRepository } from '~/modules/cars'

interface IImportCategory {
  name: string
  description: string
}

class ImportCategoryUseCase {
  private categoriesRepository: ICategoriesRepository

  constructor(categoriesRepository: ICategoriesRepository) {
    this.categoriesRepository = categoriesRepository
  }

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path)
      const categories: IImportCategory[] = []
      const parseFile = parse({ delimiter: ', ' })
      stream.pipe(parseFile)
      parseFile
        .on('data', async line => {
          const [name, description] = line
          categories.push({ name, description })
        })
        .on('end', () => {
          resolve(categories)
        })
        .on('error', err => {
          reject(err)
        })
    })
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file)
    categories.map(async (category): Promise<void> => {
      const { name, description } = category

      const categoryAlreadyExists = this.categoriesRepository.findByName(name)

      if (!categoryAlreadyExists)
        this.categoriesRepository.create({ name, description })
    })
  }
}

export { ImportCategoryUseCase }
