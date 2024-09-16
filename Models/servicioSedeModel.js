//ServicioSede model
module.exports = (sequelize, DataTypes) => {
    const ServicioSede = sequelize.define( "servicio_sede", {
        idSede: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idServicio: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idTipoServicio: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    }, {timestamps: true}, )
    return ServicioSede
 }