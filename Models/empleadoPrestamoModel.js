//EmpleadoPrestamo model
module.exports = (sequelize, DataTypes) => {
    const EmpleadoPrestamo = sequelize.define( "empleado_prestamo", {
        tipoPrestamo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        cantidad: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: true
        },
        plazo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        fechaSolicitud: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    }, {timestamps: true}, )
    return EmpleadoPrestamo
 }