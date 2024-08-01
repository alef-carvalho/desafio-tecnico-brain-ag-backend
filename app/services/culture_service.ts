import { inject } from '@adonisjs/core'
import CultureRepository from '#repositories/culture_repository'

@inject()
export default class CultureService {
  constructor(private readonly cultureRepository: CultureRepository) {}
  async findAll() {
    return this.cultureRepository.findAll()
  }
}
