import Route from '@ioc:Adonis/Core/Route'

export function categoria_routes() {
    return Route.group(() => {
        Route.get('/', 'CategoriasController.index')
        Route.post('/', 'CategoriasController.store')
    })
    .prefix('categoria')
}