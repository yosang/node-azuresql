class ColorService {
    constructor(db) {
        this.client = db.sequelize;
        this.Color = db.Color;
    }

    async getAll() {
        return this.Color.findAll()
    }

    async create(name) {
        return this.Color.insertOne()
    }
}

module.exports = ColorService;