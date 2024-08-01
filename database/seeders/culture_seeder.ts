import Culture from '#models/culture'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Culture.updateOrCreateMany('id', [
      { id: 1, name: 'Algodão' },
      { id: 2, name: 'Soja' },
      { id: 3, name: 'Milho' },
      { id: 4, name: 'Trigo' },
      { id: 5, name: 'Café' },
    ])
  }
}
