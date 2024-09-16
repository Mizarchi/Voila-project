//ServicioEmpleado model
module.exports = (sequelize, DataTypes) => {
    const ServicioEmpleado = sequelize.define( "servicio_empleado", {
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
        idEmpleado: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    }, {timestamps: true}, )
    return ServicioEmpleado
 }