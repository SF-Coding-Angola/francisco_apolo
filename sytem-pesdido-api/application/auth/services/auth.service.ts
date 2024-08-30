import { AuthContract } from '@ioc:Adonis/Addons/Auth';
import Hash from "@ioc:Adonis/Core/Hash";
import UserRepository from '../../../application/auth/infrastructure/repository/user.repository'
import { errorMessage, sucesso } from '../../../application/shared/utils/response'
import User from 'App/Models/User';

export default class AuthService {
    protected readonly userRepository: UserRepository

    constructor() {
        this.userRepository = new UserRepository()
    }

    public async login(auth: AuthContract, loginDto: any): Promise<any> {

        const user = await User.query()
            .where('email', loginDto.email)
            .where('is_deleted', false)
            .preload('perfil')
            .firstOrFail()

        if (!user) return errorMessage('O E-mail não existe!')
        console.log(user);

        if (!(await Hash.verify(user.password, loginDto.password))) {
            return errorMessage('E-mail ou Password inválidos!')
        }

        const token = await auth.use('api').generate(user)
        console.log(token);
        
        if (!token) return errorMessage('Erro interno!')

        const data = {
            token: token,
            user: user
        }

        console.log(data);


        return sucesso(data)        
    }
}