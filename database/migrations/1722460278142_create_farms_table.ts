import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'farms'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('farmer_id')
      table.string('name', 50)
      table.decimal('total_area', 8, 2)
      table.decimal('total_agriculture_area', 8, 2)
      table.decimal('total_vegetation_area', 8, 2)
      table.timestamp('created_at')
      table.timestamp('updated_at')

      table.foreign('farmer_id').references('farmers.id').onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
