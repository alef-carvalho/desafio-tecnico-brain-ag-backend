import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Farm extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare farmer_id: number

  @column()
  declare total_area: number

  @column()
  declare total_agriculture_area: number

  @column()
  declare total_vegetation_area: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
