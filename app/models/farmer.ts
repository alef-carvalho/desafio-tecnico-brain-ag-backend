import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, SnakeCaseNamingStrategy } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Farm from '#models/farm'

export default class Farmer extends BaseModel {
  static namingStrategy = new SnakeCaseNamingStrategy()

  @column({ isPrimary: true })
  declare id: string

  @column()
  declare name: string

  @column()
  declare cpf_cnpj: string

  @column()
  declare city: string

  @column()
  declare state: string

  @hasMany(() => Farm, { foreignKey: 'farmer_id' })
  declare farms: HasMany<typeof Farm>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
