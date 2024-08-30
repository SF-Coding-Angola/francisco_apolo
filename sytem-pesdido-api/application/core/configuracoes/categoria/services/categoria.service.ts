import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CategoriaRepository from "../../../../../application/core/configuracoes/categoria/infrastructure/repository/categoria.repository";
import { errorMessage, sucesso } from 'application/shared/utils/response';
import BaseService from 'application/shared/services/base.service';

export default class CategoriaService extends BaseService {
    protected readonly categoriaRepository: CategoriaRepository

    constructor() {
        const repository = new CategoriaRepository()
        super(repository)

        this.categoriaRepository = repository        
    }

    public async create(ctx: HttpContextContract): Promise<any> {
        const props = ctx.request.all()
        
        const categoriaDto = {
            designacao: props.designacao,
            descricao: props.descricao,
        }

        const categoriaResponse = await this.categoriaRepository.create(categoriaDto)
        if (!categoriaResponse) return errorMessage('Erro ao cadastrar categoria!')
        
        return sucesso(categoriaResponse)
    }
}