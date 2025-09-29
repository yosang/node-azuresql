module.exports  = (sequelize, Sequelize) => {
    return sequelize.define('City', {
        Name: Sequelize.DataTypes.STRING(255),
        Country: Sequelize.DataTypes.STRING(255)
    }, {
        timestamps: false
    })
};