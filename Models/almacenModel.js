//almacen model
module.exports = (sequelize, DataTypes) => {
    const Almacen = sequelize.define( "almacen", {
        nameAlmacen: {
            type: DataTypes.STRING,
            allowNull: false
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: true
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: true
        },
        idSede: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },        
    }, {timestamps: true}, )
    return Almacen
 }