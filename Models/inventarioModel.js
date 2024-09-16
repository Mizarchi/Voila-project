//Inventario model
module.exports = (sequelize, DataTypes) => {
    const Inventario = sequelize.define( "inventario", {
        idSede: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idAlmacen: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idProducto: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: true
        },
        presentacion: {
            type: DataTypes.STRING,
            allowNull: true
        },
        stock: {
            type: DataTypes.STRING,
            allowNull: true
        },
        minStock: {
            type: DataTypes.STRING,
            allowNull: true
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    }, {timestamps: true}, )
    return Inventario
 }