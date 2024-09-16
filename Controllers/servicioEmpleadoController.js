//requiring modules
const express = require("express");
const db = require("../Models");

const ServicioEmpleado = db.servicioEmpleado;

const postservicioempleado = async (req, res) => {
    try {
        const idSede = req.body?.idSede;
        const idServicio = req.body?.idServicio;
        const idTipoServicio = req.body?.idTipoServicio;
        const idEmpleado = req.body?.idEmpleado;
        
        if (!idSede || !idServicio || !idTipoServicio || !idEmpleado){
          return res.status(400).json({ message: 'Bad request, name not found' });
        }
        const save = await ServicioEmpleado.create({
            idSede,
            idServicio,
            idTipoServicio,
            idEmpleado
        })
        return res.status(201).json({ servicioEmpleado: save });
    } catch (error) {
        console.log(error)
        
    }
}

const updateservicioEmpleado = async (req, res) => {
    try {
        const update = await ServicioEmpleado.update({
            idSede: req.body?.idSede,
            idServicio: req.body?.idServicio,
            idTipoServicio: req.body?.idTipoServicio,
            idEmpleado: req.body?.idEmpleado
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ servicioEmpleado: update });
    } catch (error) {
        console.log(error)
    }
}

const eliminarservicioEmpleado = async (req, res) => {
    try {
        const update = await ServicioEmpleado.update({
            status: false,
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ servicioEmpleado: update });
    } catch (error) {
        console.log(error)
    }
}

const servicioEmpleadoAll = async (req, res) => {
    try {
        const servicioEmpleado = await ServicioEmpleado.findAll()
        return res.json({ servicioEmpleado });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

const getservicioEmpleado = async (req, res) => {
    const { id } = req.params // Extrae el ID del parámetro de la solicitud
    try {
        const servicioEmpleado = await ServicioEmpleado.findAll({
            where: {
                id: [id],
                status: true,
            },
        })
        return res.json({ servicioEmpleado });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};



//exporting the modules
module.exports = {
    getservicioEmpleado,
    servicioEmpleadoAll,
    postservicioempleado,
    updateservicioEmpleado,
    eliminarservicioEmpleado,
};