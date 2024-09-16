//detallePago model
module.exports = (sequelize, DataTypes) => {
    const DetallePago = sequelize.define( "detalle_pago", {
        idPago: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        idTipoPago: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        monto: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: true
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    }, {timestamps: true}, )
    return DetallePago
 }