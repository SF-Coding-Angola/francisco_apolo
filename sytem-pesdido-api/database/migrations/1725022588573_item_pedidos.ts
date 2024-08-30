import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'item_pedidos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('quantidade').notNullable()
      table.double('preco_unitario', 30, 2).notNullable()
      table.double('total', 30, 2)

      table.integer('pedido_id').unsigned().references('pedidos.id').notNullable()
      table.integer('produto_id').unsigned().references('produtos.id').notNullable()

      table.boolean('is_deleted').defaultTo(false) 

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
