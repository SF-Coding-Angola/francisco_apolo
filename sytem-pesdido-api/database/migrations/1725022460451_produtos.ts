import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'produtos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('nome')
      table.double('preco', 30, 2)
      table.string('imagem')

      table.integer('categoria_id').unsigned().references('categorias.id').notNullable().onDelete('CASCADE')
      table.integer('estabelecimento_id').unsigned().references('estabelecimentos.id').nullable().onDelete('CASCADE')

      table.boolean('is_deleted').defaultTo(false)

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
