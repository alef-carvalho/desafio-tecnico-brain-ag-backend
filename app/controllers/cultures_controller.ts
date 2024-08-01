import { inject } from '@adonisjs/core'
import CultureService from '#services/culture_service'

@inject()
export default class CulturesController {
  constructor(private cultureService: CultureService) {}
  async index() {
    return this.cultureService.findAll()
  }
}
