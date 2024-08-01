import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import { createFarmerValidator } from '#validators/farmer_validator'
import FarmService from '#services/farm_service'

@inject()
export default class FarmController {
  constructor(private readonly farmService: FarmService) {}
  async index({}: HttpContext) {
    return this.farmService.findAll()
  }

  async show({ params }: HttpContext) {
    return this.farmService.findOne(params.id)
  }

  async store({ request }: HttpContext) {
    const createFarmerDto = await request.validateUsing(createFarmerValidator)
    return this.farmService.store(createFarmerDto)
  }

  async update({ params, request }: HttpContext) {}

  async destroy({ params }: HttpContext) {
    return this.farmService.destroy(params.id)
  }
}
