import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CategoriaService from 'application/core/configuracoes/categoria/services/categoria.service'

export default class CategoriasController {
    protected readonly categoriaService: CategoriaService

    public async index(ctx: HttpContextContract) {
        try {
            const categoriaResponse = await this.categoriaService.listAll()
            return {data: categoriaResponse}
            
        } catch (error) {
            return {error: error}
        }
    }
    
    public async store(ctx: HttpContextContract) {
        try {
            const categoriaResponse = await this.categoriaService.create(ctx)
            if (!categoriaResponse.error) return ctx.response.status(500).send(categoriaResponse)

            return ctx.response.status(200).send(categoriaResponse)

        } catch (error) {
            return {error: error}
        }
    }
}
