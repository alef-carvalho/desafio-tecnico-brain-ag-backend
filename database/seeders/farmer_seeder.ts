import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Farmer from '#models/farmer'

export default class extends BaseSeeder {
  async run() {
    const farmer = await Farmer.firstOrCreate(
      { cpf_cnpj: '00178695017' },
      {
        name: 'Alef Carvalho',
        city: 'Porto Velho',
        state: 'RO',
      }
    )
    const farm = await farmer.related('farms').firstOrCreate(
      {
        name: 'Fazenda Sucuri',
      },
      {
        total_area: 1000,
        total_vegetation_area: 500,
        total_agriculture_area: 500,
      }
    )

    farm.related('cultures').attach([1, 2, 3])
  }
}
