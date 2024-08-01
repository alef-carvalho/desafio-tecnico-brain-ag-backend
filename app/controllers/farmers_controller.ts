import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import FarmerService from '#services/farmer_service'
import { storeFarmerValidator, updateFarmValidator } from '#validators/farmer_validator'

@inject()
export default class FarmerController {
  constructor(private readonly farmerService: FarmerService) {}
  async index() {
    return this.farmerService.findAll()
  }

  async show({ params }: HttpContext) {
    return this.farmerService.findOne(params.id)
  }

  async store({ request }: HttpContext) {
    const createFarmerDto = await request.validateUsing(storeFarmerValidator)
    return this.farmerService.store(createFarmerDto)
  }

  async update({ request, params }: HttpContext) {
    const updateFarmDto = await request.validateUsing(updateFarmValidator)
    return this.farmerService.update(params.id, updateFarmDto)
  }

  async destroy({ params }: HttpContext) {
    return this.farmerService.destroy(params.id)
  }
}
