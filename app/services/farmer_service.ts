import { inject } from '@adonisjs/core'
import FarmerRepository from '#repositories/farmer_repository'

@inject()
export default class FarmerService {
  constructor(private readonly farmerRepository: FarmerRepository) {}

  async findAll() {
    return this.farmerRepository.findAll()
  }

  async findOne(farmerId: number) {
    return this.farmerRepository.findOne(farmerId)
  }

  async store(createFarmerDto: any) {
    return this.farmerRepository.store(createFarmerDto)
  }

  async destroy(farmerId: number) {
    return this.farmerRepository.delete(farmerId)
  }
}
