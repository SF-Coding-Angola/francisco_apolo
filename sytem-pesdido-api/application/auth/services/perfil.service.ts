import BaseService from "../../../application/shared/services/base.service";
import PerfilRepository from "../../../application/auth/infrastructure/repository/perfil.repository";

export default class PerfilService extends BaseService {

    constructor() {
        super(new PerfilRepository())
    }

}