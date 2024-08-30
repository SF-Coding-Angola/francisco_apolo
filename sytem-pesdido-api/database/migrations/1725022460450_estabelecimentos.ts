import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'estabelecimentos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('nome').notNullable()
      table.string('area_atuacao')
      table.string('endereco')

      table.integer('user_id').unsigned().references('users.id').notNullable().onDelete('CASCADE')

      table.boolean('is_deleted').defaultTo(false)
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
