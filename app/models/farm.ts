import { DateTime } from 'luxon'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, belongsTo, column, manyToMany } from '@adonisjs/lucid/orm'
import Culture from '#models/culture'
import Farmer from '#models/farmer'

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

  @manyToMany(() => Culture, { pivotTable: 'farm_cultures' })
  declare cultures: ManyToMany<typeof Culture>

  @belongsTo(() => Farmer)
  declare farmer: BelongsTo<typeof Farmer>
}
