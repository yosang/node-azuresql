class CityService {
  constructor(db) {
    this.City = db.City;
  }

  async getAll() {
    return this.City.findAll();
  }

  async create(name, country) {
    return this.City.create({ Name: name, Country: country }).catch(err => console.log(err));
  }

  async delete(id) {
    return this.City.destroy({ where: { id } }).catch(err => console.log(err));
  }
}

module.exports = new CityService(require("../models"));
