import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserService from '../../../application/auth/services/user.service';
import AuthService from '../../../application/auth/services/auth.service';

export default class AuthController {
    protected readonly authService: AuthService
    protected readonly userService: UserService

    constructor() {
        this.authService = new AuthService()
        this.userService = new UserService()
    }

    public async login({auth, request, response}: HttpContextContract) {
       try {
            const loginDto = {
                email: request.input('email'),
                password: request.input('password')
            }
            const loginResponse = await this.authService.login(auth, loginDto)

            if (loginResponse.error) return response.status(400).send(loginResponse)

            return response.status(200).send(loginResponse)        
       } catch (error) {
        return error
       }        
    }

    public async criarConta(ctx: HttpContextContract) {
        try {
            const response = await this.userService.criarConta(ctx)

            if (response.error) ctx.response.status(500).send(response)

            return ctx.response.status(200).send(response)
        } catch (error) {
            return error
        }
    }
}
