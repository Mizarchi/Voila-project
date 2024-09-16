//Servicio model
module.exports = (sequelize, DataTypes) => {
    const Servicio = sequelize.define( "servicio", {
        servicio: {
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
    return Servicio
 }