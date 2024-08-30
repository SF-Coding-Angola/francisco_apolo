import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'pedidos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('numero').unsigned()
      table.double('taxa_entrega', 30, 2)
      table.double('total',30, 2)
      table.string('destinatario').notNullable()
      table.string('destino').notNullable()
      table.enum('estado', ['pendente', 'processo', 'entregue']).defaultTo('pendente')

      table.integer('estabelecimento_id').unsigned().references('estabelecimentos.id').nullable().onDelete('CASCADE')
      table.integer('cliente_id').unsigned().references('users.id').notNullable().onDelete('CASCADE')

      table.boolean('is_deleted').defaultTo(false)     
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
