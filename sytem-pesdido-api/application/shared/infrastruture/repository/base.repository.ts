import { LucidModel } from "@ioc:Adonis/Lucid/Orm";

export default class BaseRepository {
    protected readonly lucidModel: LucidModel

    constructor(model: LucidModel) {
        this.lucidModel = model
    }

    public async findAll(preloads?: any[]): Promise<any[]> {
        const query = this.lucidModel.query()
            .select('*')
            .where('is_deleted', false)

            if (preloads) {
                for (const preload of preloads) {
                    query.preload(preload)
                }
            }
        const data = await query
        
        return data ? data.map(item => item.toJSON()): []
    }

    public async findById(id: number, preloads?: any[]): Promise<any> {
        const query = this.lucidModel.query()
            .select('*')
            .where('id', id)
            .andWhere('is_deleted', false)
        
        if (preloads) {
            for (const preload of preloads) {
                query.preload(preload)
            }
        }

        const data = await query.first()

        return data ? data?.toJSON() : null
    }
    
    public async findBy(fieldName: string, value: string, preloads?: any[]): Promise<any> {
        const query = this.lucidModel.query()
            .select('*')
            .where(fieldName, value)
            .andWhere('is_deleted', false)
        
        if (preloads) {
            for (const preload of preloads) {
                query.preload(preload)
            }
        }

        const data = await query.first()

        return data ? data?.toJSON() : null
    }

    public async create(propsDto: any): Promise<any> {
        const data = await this.lucidModel.create(propsDto)

        return data.toJSON() 
    }
    
    public async update(id: number, propsDto: any): Promise<any> {
        const data = await this.lucidModel.query()
            .select('*')
            .where('id', id)
            .andWhere('is_deleted', false)
            .first()

        if (!data) return null
        await data.merge(propsDto).save()

        return data.toJSON()
    }
    
    public async delete(id: number): Promise<any> {
        const data = await this.lucidModel.query()
            .select('*')
            .where('id', id)
            .andWhere('is_deleted', false)
            .first()

        if (!data) return false
        await data.merge({ isDeleted: true }).save()

        return true
    }

    public async destroy(id: number): Promise<any> {
        const data = await this.lucidModel.query()
            .select('*')
            .where('id', id)
            .andWhere('is_deleted', false)
            .first()
        
        if (!data) return false
        await data.delete()

        return true
    }
}