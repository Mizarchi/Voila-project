//pago model
module.exports = (sequelize, DataTypes) => {
    const Pago = sequelize.define( "pago", {
        idCita: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        idVenta: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        idEmpleadoPrestamo: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        montoTotal: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: true
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    }, {timestamps: true}, )
    return Pago
 }