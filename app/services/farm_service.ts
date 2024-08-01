import { inject } from '@adonisjs/core'
import FarmRepository from '#repositories/farm_repository'
import { UpdateFarmDTO } from '#interfaces/farm/update_farm_dto'
import { CreateFarmDTO } from '#interfaces/farm/create_farm_dto'
import ConflictException from '#exceptions/conflict_exception'

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
    this.validateFarmArea(
      createFarmerDto.total_area,
      createFarmerDto.total_agriculture_area,
      createFarmerDto.total_vegetation_area
    )
    return this.farmRepository.store(createFarmerDto, cultures)
  }

  async update(farmId: number, { cultures, ...updateFarmDto }: UpdateFarmDTO) {
    this.validateFarmArea(
      updateFarmDto.total_area,
      updateFarmDto.total_agriculture_area,
      updateFarmDto.total_vegetation_area
    )
    return this.farmRepository.update(farmId, updateFarmDto, cultures)
  }

  async destroy(farmId: number) {
    return this.farmRepository.delete(farmId)
  }

  private validateFarmArea(
    total_area: number,
    total_agriculture_area: number,
    total_vegetation_area: number
  ) {
    if (total_agriculture_area + total_vegetation_area > total_area) {
      throw new ConflictException(
        'A soma da área agricultável e de vegetação não deve ser maior que a área total da fazenda'
      )
    }
  }
}
