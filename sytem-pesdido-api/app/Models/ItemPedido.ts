import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Produto from './Produto'

export default class ItemPedido extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  declare quantidade: number

  @column()
  declare precoUnitario: number

  @column()
  declare total: number
  
  @column()
  declare pedidoId: number
  
  @column()
  declare produtoId: number

  @belongsTo(() => Produto, {foreignKey: 'produtoId'})
  declare produto: BelongsTo<typeof Produto>

  @column()
  declare isDeleted: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
