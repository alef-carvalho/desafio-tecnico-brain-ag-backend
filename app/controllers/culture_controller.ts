import { inject } from '@adonisjs/core'
import CultureService from '#services/culture_service'

@inject()
export default class CultureController {
  constructor(private cultureService: CultureService) {}

  /**
   * @index
   * @operationId getCultures
   * @description Returns array of available cultures
   * @responseBody 200 - <Culture[]>
   */
  async index() {
    return this.cultureService.findAll()
  }
}
