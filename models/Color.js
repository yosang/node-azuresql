module.exports = (sequelize, Sequelize) => {
    const Color = sequelize.define('Color', {
        Name: Sequelize.DataTypes.STRING
    },{
        timestamps: false
    });
    return Color
}