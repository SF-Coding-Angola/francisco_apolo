import BaseRepository from "../../../application/shared/infrastruture/repository/base.repository";
import { notFound, notSave, sucesso } from "../../../application/shared/utils/response";

export default class BaseService {
    constructor(protected readonly baseRepository: BaseRepository) {}

    public async listAll(preloads?: any[]): Promise<any[]> {
        return await this.baseRepository.findAll(preloads)
    }

    public async getById(id: number, preloads?: any[]): Promise<any> {
        const data = await this.baseRepository.findById(id, preloads)

        if (!data) return notFound()

        return sucesso(data)
    }

    public async create(propsDto: any): Promise<any> {
        const data = await this.baseRepository.create(propsDto)
        if (!data) return notSave()

        return sucesso(data)
    }
}