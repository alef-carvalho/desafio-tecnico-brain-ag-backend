import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import FarmService from '#services/farm_service'
import { storeFarmValidator, updateFarmValidator } from '#validators/farm_validator'

@inject()
export default class FarmController {
  constructor(private readonly farmService: FarmService) {}

  /**
   * @index
   * @operationId getFarms
   * @paramPath farmerId - The id of farmer - @type(number) @required
   * @description Returns array of farms
   * @responseBody 200 - <Farm[]>
   */
  async index({ params }: HttpContext) {
    return this.farmService.findAll(params.farmerId)
  }

  /**
   * @show
   * @paramPath id - The id of farm - @type(number) @required
   * @description Returns the farm with cultures
   * @responseBody 200 - <Farm>.with(cultures)
   */
  async show({ params }: HttpContext) {
    return this.farmService.findOne(params.id)
  }

  /**
   * @store
   * @description Create a new farm
   * @requestBody <CreateFarmDTO>
   * @responseBody 200 - <Farm>
   */
  async store({ request }: HttpContext) {
    const createFarmDto = await request.validateUsing(storeFarmValidator)
    return this.farmService.store(createFarmDto)
  }

  /**
   * @update
   * @paramPath id - The id of farm - @type(number) @required
   * @description Update the farm
   * @requestBody <UpdateFarmDTO>
   * @responseBody 200 - <Farm>
   */
  async update({ params, request }: HttpContext) {
    const updateFarmDto = await request.validateUsing(updateFarmValidator)
    return this.farmService.update(params.id, updateFarmDto)
  }

  /**
   * @destroy
   * @paramPath id - The id of farm - @type(number) @required
   * @description Delete the farm
   */
  async destroy({ params }: HttpContext) {
    return this.farmService.destroy(params.id)
  }
}
