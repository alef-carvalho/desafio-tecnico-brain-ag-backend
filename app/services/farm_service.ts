import { inject } from '@adonisjs/core'
import FarmRepository from '#repositories/farm_repository'
import { UpdateFarmDto } from '#interfaces/farm/update_farm_dto'
import { CreateFarmDTO } from '#interfaces/farm/create_farm_dto'

@inject()
export default class FarmService {
  constructor(private readonly farmRepository: FarmRepository) {}

  async findAll(farmerId: number) {
    return this.farmRepository.findAll(farmerId)
  }

  async findOne(farmId: number) {
    return this.farmRepository.findOne(farmId)
  }

  async store({ cultures, ...createFarmerDto }: CreateFarmDTO) {
    return this.farmRepository.store(createFarmerDto, cultures)
  }

  async update(farmId: number, { cultures, ...updateFarmDto }: UpdateFarmDto) {
    return this.farmRepository.update(farmId, updateFarmDto, cultures)
  }

  async destroy(farmId: number) {
    return this.farmRepository.delete(farmId)
  }
}
