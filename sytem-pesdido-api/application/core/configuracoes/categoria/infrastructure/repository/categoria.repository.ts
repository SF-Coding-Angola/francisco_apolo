import Categoria from "App/Models/Categoria";
import BaseRepository from "../../../../../../application/shared/infrastruture/repository/base.repository";

export default class CategoriaRepository extends BaseRepository {
    constructor() {
        super(Categoria)
    }
}