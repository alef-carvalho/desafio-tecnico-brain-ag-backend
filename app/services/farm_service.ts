import { inject } from '@adonisjs/core'
import FarmRepository from '#repositories/farm_repository'

@inject()
export default class FarmService {
  constructor(private readonly farmRepository: FarmRepository) {}

  async findAll() {
    return this.farmRepository.findAll()
  }

  async findOne(farmerId: number) {
    return this.farmRepository.findOne(farmerId)
  }

  async store(createFarmerDto: any) {
    return this.farmRepository.store(createFarmerDto)
  }

  async destroy(farmerId: number) {
    return this.farmRepository.delete(farmerId)
  }
}
