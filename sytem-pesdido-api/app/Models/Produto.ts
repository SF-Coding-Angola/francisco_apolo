import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Categoria from './Categoria'

export default class Produto extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  declare nome: string

  @column()
  declare preco: number

  @column()
  declare imagem: string

  @column()
  declare categoriaId: number

  @belongsTo(() => Categoria, {foreignKey: 'categoriaId'})
  declare categoria: BelongsTo<typeof Categoria>

  @column()
  declare isDeleted: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
