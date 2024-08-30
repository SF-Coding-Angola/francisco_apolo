import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Perfil extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  declare nome: string

  @column()
  declare genero: string

  @column()
  declare userId: number
  
  @column()
  declare isDeleted: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
