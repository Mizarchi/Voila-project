//Proveedor model
module.exports = (sequelize, DataTypes) => {
    const Proveedor = sequelize.define( "proveedor", {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        identificador: {
            type: DataTypes.STRING,
            allowNull: true
        },
        telefono: {
            type: DataTypes.STRING,
            allowNull: true
        },
        celular: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: true
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    }, {timestamps: true}, )
    return Proveedor
 }