import User from "App/Models/User";
import BaseRepository from "../../../../application/shared/infrastruture/repository/base.repository";

export default class UserRepository extends BaseRepository {
    constructor() {
        super(User)
    }

    public async userVerify(email: string): Promise<boolean> {
        const data = await User.query()
            .select('*')
            .where('email', email)
            .first()

        if (!data) return false

        return true
    }
}