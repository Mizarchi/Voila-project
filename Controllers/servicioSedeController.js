//requiring modules
const express = require("express");
const db = require("../Models");

const ServicioSede = db.servicioSede;

const postserviciosede = async (req, res) => {
    try {
        const idSede = req.body?.idSede;
        const idServicio = req.body?.idServicio;
        const idTipoServicio = req.body?.idTipoServicio;
        
        if (!idSede || !idServicio || !idTipoServicio){
          return res.status(400).json({ message: 'Bad request, name not found' });
        }
        const save = await ServicioSede.create({
            idSede,
            idServicio,
            idTipoServicio
        })
        return res.status(201).json({ servicioSede: save });
    } catch (error) {
        console.log(error)
        
    }
}

const updateServicioSede = async (req, res) => {
    try {
        const update = await ServicioSede.update({
            idSede: req.body?.idSede,
            idServicio: req.body?.idServicio,
            idTipoServicio: req.body?.idTipoServicio,
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ servicioSede: update });
    } catch (error) {
        console.log(error)
    }
}

const eliminarServicioSede = async (req, res) => {
    try {
        const update = await ServicioSede.update({
            status: false,
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ servicioSede: update });
    } catch (error) {
        console.log(error)
    }
}

const servicioSedeAll = async (req, res) => {
    try {
        const ServicioSede = await ServicioSede.findAll()
        return res.json({ servicioSede });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

const getservicioSede = async (req, res) => {
    const { id } = req.params // Extrae el ID del parámetro de la solicitud
    try {
        const servicioSede = await ServicioSede.findAll({
            where: {
                id: [id],
                status: true,
            },
        })
        return res.json({ servicioSede });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};



//exporting the modules
module.exports = {
    getservicioSede,
    servicioSedeAll,
    postserviciosede,
    updateServicioSede,
    eliminarServicioSede,
};