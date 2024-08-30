import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Produto from './Produto'

export default class Categoria extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  declare designacao: string

  @column()
  declare descricao: string

  @hasMany(() => Produto, {foreignKey: 'categoriaId'})
  declare produtos: HasMany<typeof Produto>

  @column()
  declare isDeleted: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
