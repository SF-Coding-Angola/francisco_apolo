import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'item_carrinhos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('quantidade').notNullable()

      table.integer('carrinho_id').unsigned().references('carrinhos.id').notNullable()
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
