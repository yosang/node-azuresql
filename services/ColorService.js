class ColorService {
    constructor(db) {
        this.client = db.sequelize;
        this.Color = db.Color;
    }

    async getAll () {
        return this.Color.findAll()
    }
}

module.exports = ColorService;