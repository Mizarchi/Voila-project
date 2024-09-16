//sede model
module.exports = (sequelize, DataTypes) => {
    const Sede = sequelize.define( "sede", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: true
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    }, {timestamps: true}, )
    return Sede
 }