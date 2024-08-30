import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BaseService from "../../../application/shared/services/base.service";
import UserRepository from "../../../application/auth/infrastructure/repository/user.repository";
import PerfilRepository from '../../../application/auth/infrastructure/repository/perfil.repository';
import { errorMessage, sucesso } from "../../../application/shared/utils/response";

export default class UserService extends BaseService {
    protected readonly perfilRepository: PerfilRepository
    protected readonly userRepository: UserRepository

    constructor() {
        const repository = new UserRepository()
        super(repository)

        this.userRepository = repository
        this.perfilRepository = new PerfilRepository()
    }

    public async criarConta(ctx: HttpContextContract): Promise<any> {
        const props = ctx.request.all()

        const userDto = {
            email: props.email,
            password: props.password
        }

        const isUserExists = await this.userRepository.userVerify(userDto.email)
        if (isUserExists) return errorMessage("O E-mail já existe!")

        const userResponse = await this.userRepository.create(userDto)

        if(!userResponse) return errorMessage("Erro ao salvar usuário!")

        const perfilDto = {
            nome: props.nome,
            genero: props.genero,
            userId: userResponse.id
        }
        
        const perfilResponse = await this.perfilRepository.create(perfilDto)

        if (!perfilResponse) {
            this.userRepository.destroy(userResponse.id)
            return errorMessage("Erro ao criar conta!")
        }

        return sucesso(userResponse, "Conta criada com sucesso")
    }

}