class ColorService {
    constructor(db) {
        this.client = db.sequelize;
        this.Color = db.Color;
    }

    async getAll() {
        return this.Color.findAll()
    }

    async create(name) {
        return this.Color.create( { Name: name}).catch(err => { if(err) throw Error('Sequelize create failed', err.message)})
    }
}

module.exports = ColorService;