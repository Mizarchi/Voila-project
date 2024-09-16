//requiring modules
const express = require("express");
const db = require("../Models");

const TipoServicio = db.tipoServicio;

const posttipoServicio = async (req, res) => {
    try {
        const idSede = req.body?.idSede;
        const idServicio = req.body?.idServicio;
        const detalle = req.body?.detalle;
        const idGenero = req.body?.idGenero;
        const costo = req.body?.costo;
        const idMoneda = req.body?.idMoneda;
        
        if (!idSede || !idServicio || !idGenero || !costo){
          return res.status(400).json({ message: 'Bad request, name not found' });
        }
        const save = await TipoServicio.create({
            idSede,
            idServicio,
            detalle,
            idGenero,
            costo,
            idMoneda
        })
        return res.status(201).json({ tipoServicio: save });
    } catch (error) {
        console.log(error)
        
    }
}

const updateTipoServicio = async (req, res) => {
    try {
        const update = await TipoServicio.update({
            idSede: req.body?.idSede,
            idServicio: req.body?.idServicio,
            detalle: req.body?.detalle,
            idGenero: req.body?.idGenero,
            costo: req.body?.costo,
            idMoneda: req.body?.idMoneda,
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ tipoServicio: update });
    } catch (error) {
        console.log(error)
    }
}

const eliminarTipoServicio = async (req, res) => {
    try {
        const update = await TipoServicio.update({
            status: false,
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ tipoServicio: update });
    } catch (error) {
        console.log(error)
    }
}

const tipoServicioAll = async (req, res) => {
    try {
        const tipoServicio = await TipoServicio.findAll()
        return res.json({ tipoServicio });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

const gettipoServicio = async (req, res) => {
    const { id } = req.params // Extrae el ID del parámetro de la solicitud
    try {
        const tipoServicio = await TipoServicio.findAll({
            where: {
                id: [id],
                status: true,
            },
        })
        return res.json({ tipoServicio });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};



//exporting the modules
module.exports = {
    gettipoServicio,
    tipoServicioAll,
    posttipoServicio,
    updateTipoServicio,
    eliminarTipoServicio,
};