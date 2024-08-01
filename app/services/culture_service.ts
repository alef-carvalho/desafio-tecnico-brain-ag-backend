import CultureRepository from '#repositories/culture_repository'
import { inject } from '@adonisjs/core'

@inject()
export default class CultureService {
  constructor(private readonly cultureRepository: CultureRepository) {}
  async findAll() {
    return this.cultureRepository.findAll()
  }
}
