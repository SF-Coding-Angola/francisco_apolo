import Perfil from "App/Models/Perfil";
import BaseRepository from "../../../../application/shared/infrastruture/repository/base.repository";

export default class PerfilRepository extends BaseRepository {
    constructor() {
        super(Perfil)
    }
}