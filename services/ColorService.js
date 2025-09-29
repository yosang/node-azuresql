class ColorService {
  constructor(db) {
    this.Color = db.Color;
  }

  async getAll() {
    return this.Color.findAll();
  }

  async create(name) {
    return this.Color.create({ Name: name }).catch(err => console.log(err));
  }

  async delete(name) {
    return this.Color.destroy({ where: { Name: name } }).catch(err => console.log(err));
  }
}
module.exports = new ColorService(require('../models'));
