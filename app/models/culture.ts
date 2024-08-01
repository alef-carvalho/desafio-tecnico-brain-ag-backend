import { DateTime } from 'luxon'
import { BaseModel, column, SnakeCaseNamingStrategy } from '@adonisjs/lucid/orm'

export default class Culture extends BaseModel {
  static namingStrategy = new SnakeCaseNamingStrategy()

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare active: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt?: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt?: DateTime
}
