import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'farm_cultures'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('farm_id')
      table.integer('culture_id')

      table.foreign('farm_id').references('farms.id').onDelete('CASCADE')
      table.foreign('culture_id').references('cultures.id').onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
