//Producto model
module.exports = (sequelize, DataTypes) => {
    const Producto = sequelize.define( "producto", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: true
        },
        idMarca: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        idModelo: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        presentacion: {
            type: DataTypes.STRING,
            allowNull: true
        },
        unidad: {
            type: DataTypes.STRING,
            allowNull: true
        },
        medida: {
            type: DataTypes.STRING,
            allowNull: true
        },
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        observacion: {
            type: DataTypes.STRING,
            allowNull: true
        },
        precio: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: true
        },
        idMoneda: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    }, {timestamps: true}, )
    return Producto
 }