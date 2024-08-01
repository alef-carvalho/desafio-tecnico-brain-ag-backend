import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import FarmerService from '#services/farmer_service'
import { storeFarmerValidator, updateFarmValidator } from '#validators/farmer_validator'

@inject()
export default class FarmerController {
  constructor(private readonly farmerService: FarmerService) {}

  /**
   * @index
   * @operationId getFarmers
   * @description Returns array of farmers
   * @responseBody 200 - <Farmer[]>
   */
  async index() {
    return this.farmerService.findAll()
  }

  /**
   * @show
   * @paramPath id - The id of farmer - @type(number) @required
   * @description Returns the farmer with our relations
   * @responseBody 200 - <Farmer>.with(farms)
   */
  async show({ params }: HttpContext) {
    return this.farmerService.findOne(params.id)
  }

  /**
   * @store
   * @description Create a new farmer
   * @requestBody <CreateFarmerDTO>
   * @responseBody 200 - <Farmer>
   */
  async store({ request }: HttpContext) {
    const createFarmerDto = await request.validateUsing(storeFarmerValidator)
    return this.farmerService.store(createFarmerDto)
  }

  /**
   * @update
   * @paramPath id - The id of farmer - @type(number) @required
   * @description Update the farmer
   */
  async update({ request, params }: HttpContext) {
    const updateFarmDto = await request.validateUsing(updateFarmValidator)
    return this.farmerService.update(params.id, updateFarmDto)
  }

  /**
   * @destroy
   * @paramPath id - The id of farmer - @type(number) @required
   * @description Delete the farmer
   */
  async destroy({ params }: HttpContext) {
    return this.farmerService.destroy(params.id)
  }
}
