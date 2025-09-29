const Sequelize = require("sequelize");
const fs = require("fs"); // Used for reading directory files
const path = require("path"); // Used for path manipulation
const basename = path.basename(__filename); // Removes the absolute path part of the the __filename, leaving only index.js

// Creates a new sequelize instance with configuration values from environment variables
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    dialectOptions: {
      encrypt: true,
    },
    logging: false
  }
);

const db = {}; // A wrapper for storing the sequelize instance as well as the Sequelize module and models
db.sequelize = sequelize; // stores the configured sequelie instance in the wrapper

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js" // Keeps files as long as the index is above 0, the file is not index.js and the last 3 letters are '.js'
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize); // Calls each model with the sequelize instance and the Sequelize module
    db[model.name] = model; // Stores initiated model function in the db wrapper for association purposes
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    // Parses each key for its modelName and if it has an associate propery, call it to establish the association
    db[modelName].associate(db);
  }
});
module.exports = db;
