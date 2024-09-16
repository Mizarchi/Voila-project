//TipoServicio model
module.exports = (sequelize, DataTypes) => {
    const TipoServicio = sequelize.define( "tipo_servicio", {
        idSede: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idServicio: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        detalle: {
            type: DataTypes.STRING,
            allowNull: true
        },
        idGenero: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        costo: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
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
    return TipoServicio
 }