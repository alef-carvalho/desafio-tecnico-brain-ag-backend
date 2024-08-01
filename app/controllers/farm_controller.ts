import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import FarmService from '#services/farm_service'
import { storeFarmValidator, updateFarmValidator } from '#validators/farm_validator'

@inject()
export default class FarmController {
  constructor(private readonly farmService: FarmService) {}

  async index({ params }: HttpContext) {
    return this.farmService.findAll(params.farmerId)
  }

  async show({ params }: HttpContext) {
    return this.farmService.findOne(params.id)
  }

  async store({ request }: HttpContext) {
    const createFarmDto = await request.validateUsing(storeFarmValidator)
    return this.farmService.store(createFarmDto)
  }

  async update({ params, request }: HttpContext) {
    const updateFarmDto = await request.validateUsing(updateFarmValidator)
    return this.farmService.update(params.id, updateFarmDto)
  }

  async destroy({ params }: HttpContext) {
    return this.farmService.destroy(params.id)
  }
}
