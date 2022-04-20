import { v4 as uuidv4 } from 'uuid'

type CategoryParams = {
  name: string
  description: string
}

class Category {
  name: string

  description: string

  id: string

  createdAt: Date

  constructor({ name, description }: CategoryParams) {
    this.name = name
    this.description = description
    this.id = uuidv4()
    this.createdAt = new Date()
  }
}

export { Category }
