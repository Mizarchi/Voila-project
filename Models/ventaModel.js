//Venta model
module.exports = (sequelize, DataTypes) => {
    const Venta = sequelize.define( "venta", {
        idSede: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idCliente: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        numFactura: {
            type: DataTypes.STRING,
            allowNull: false
        },
        numControl: {
            type: DataTypes.STRING,
            allowNull: false
        },
        monto: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    }, {timestamps: true}, )
    return Venta
 }