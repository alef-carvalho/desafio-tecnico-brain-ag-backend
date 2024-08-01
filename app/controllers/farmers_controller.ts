import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import FarmerService from '#services/farmer_service'
import { createFarmerValidator } from '#validators/farmer_validator'

@inject()
export default class FarmerController {
  constructor(private readonly farmerService: FarmerService) {}
  async index({}: HttpContext) {
    return this.farmerService.findAll()
  }

  async show({ params }: HttpContext) {
    return this.farmerService.findOne(params.id)
  }

  async store({ request }: HttpContext) {
    const createFarmerDto = await request.validateUsing(createFarmerValidator)
    return this.farmerService.store(createFarmerDto)
  }

  async update({ params, request }: HttpContext) {}

  async destroy({ params }: HttpContext) {
    return this.farmerService.destroy(params.id)
  }
}
