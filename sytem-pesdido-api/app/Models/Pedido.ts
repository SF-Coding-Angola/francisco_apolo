import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import ItemPedido from './ItemPedido'
import User from './User'

export default class Pedido extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  declare numero: number
  
  @column()
  declare destinatario: string
  
  @column()
  declare destino: string
  
  @column()
  declare estado: string
  
  @column()
  declare taxaEntrega: number
  
  @column()
  declare total: number

  @column()
  declare estabelecimentoId: string
  
  @column()
  declare entregadorId: string
  
  @column()
  declare clienteId: number

  @belongsTo(() => User, {foreignKey: 'entregadorId'})
  declare entregador: BelongsTo<typeof User>
  
  @belongsTo(() => User, {foreignKey: 'clienteId'})
  declare cliente: BelongsTo<typeof User>
  
  @hasMany(() => ItemPedido, {foreignKey: 'pedidoId'})
  declare itens: HasMany<typeof ItemPedido>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
