import { v4 as uuidv4 } from 'uuid'

type SpecificationParams = {
  name: string
  description: string
}

class Specification {
  name: string

  description: string

  id: string

  createdAt: Date

  constructor({ name, description }: SpecificationParams) {
    this.name = name
    this.description = description
    this.id = uuidv4()
    this.createdAt = new Date()
  }
}

export { Specification, SpecificationParams }
