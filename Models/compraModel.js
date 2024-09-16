//compra model
module.exports = (sequelize, DataTypes) => {
    const Compra = sequelize.define( "compra", {
        idSede: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idProveedor: {
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
    return Compra
 }