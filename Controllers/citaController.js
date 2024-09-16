//requiring modules
const express = require("express");
const db = require("../Models");

const Cita = db.cita;

const postcita = async (req, res) => {
    try {
        const idSede = req.body?.idSede;
        const idCliente = req.body?.idCliente;
        const idServicio = req.body?.idServicio;
        const idTipoServicio = req.body?.idTipoServicio;
        const idEmpleado = req.body?.idEmpleado;
        const fecha = req.body?.fecha;
        const horaInicio = req.body?.horaInicio;
        const horaFin = req.body?.horaFin;
        
        if (!idSede || !idCliente || !idServicio || !idTipoServicio || !idEmpleado || !fecha || !horaInicio){
          return res.status(400).json({ message: 'Bad request, name not found' });
        }
        const save = await Cita.create({
            idSede,
            idCliente,
            idServicio,
            idTipoServicio,
            idEmpleado,
            fecha,
            horaInicio,
            horaFin
        })
        return res.status(201).json({ cita: save });
    } catch (error) {
        console.log(error)
        
    }
}

const updatecita = async (req, res) => {
    try {
        const update = await Cita.update({
            name: req.body?.name,
            descripcion: req.body?.descripcion,

            idSede: req.body?.idSede,
            idCliente: req.body?.idCliente,
            idServicio: req.body?.idServicio,
            idTipoServicio: req.body?.idTipoServicio,
            idEmpleado: req.body?.idEmpleado,
            fecha: req.body?.fecha,
            horaInicio: req.body?.horaInicio,
            horaFin: req.body?.horaFin
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ cita: update });
    } catch (error) {
        console.log(error)
    }
}

const eliminarcita = async (req, res) => {
    try {
        const update = await Cita.update({
            status: false,
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ cita: update });
    } catch (error) {
        console.log(error)
    }
}

const citaAll = async (req, res) => {
    try {
        const cita = await Cita.findAll()
        return res.json({ cita });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

const getcita = async (req, res) => {
    const { id } = req.params // Extrae el ID del parámetro de la solicitud
    try {
        const cita = await Cita.findAll({
            where: {
                id: [id],
                status: true,
            },
        })
        return res.json({ cita });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};



//exporting the modules
module.exports = {
    getcita,
    citaAll,
    postcita,
    updatecita,
    eliminarcita,
};