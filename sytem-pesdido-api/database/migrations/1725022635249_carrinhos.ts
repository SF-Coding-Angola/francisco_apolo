import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'carrinhos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.double('taxa_entrega', 30, 2)

      table.integer('cliente_id').unsigned().references('users.id').notNullable().onDelete('CASCADE')
      
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
