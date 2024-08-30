import Route from '@ioc:Adonis/Core/Route'

export function auth_routes() {
    return Route.group(() => {
        Route.post('login', 'AuthController.login')
        Route.post('criar-conta', 'AuthController.criarConta')
    })
    .prefix('auth')
}