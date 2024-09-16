//requiring modules
const express = require("express");
const db = require("../Models");

const Servicio = db.servicio;

const postservicio = async (req, res) => {
    try {
        const servicio = req.body?.servicio;
        const descripcion = req.body?.descripcion;
        
        if (!servicio){
          return res.status(400).json({ message: 'Bad request, name not found' });
        }
        const save = await Servicio.create({
          servicio,
          descripcion
        })
        return res.status(201).json({ servicio: save });
    } catch (error) {
        console.log(error)
        
    }
}

const updateServicio = async (req, res) => {
    try {
        const update = await Servicio.update({
            name: req.body?.name,
            descripcion: req.body?.descripcion,
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ servicio: update });
    } catch (error) {
        console.log(error)
    }
}

const eliminarServicio = async (req, res) => {
    try {
        const update = await Servicio.update({
            status: false,
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ servivio: update });
    } catch (error) {
        console.log(error)
    }
}

const servicioAll = async (req, res) => {
    try {
        const servicio = await Servicio.findAll()
        return res.json({ servicio });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

const getservicio = async (req, res) => {
    const { id } = req.params // Extrae el ID del parámetro de la solicitud
    try {
        const servicio = await Servicio.findAll({
            where: {
                id: [id],
                status: true,
            },
        })
        return res.json({ servicio });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};



//exporting the modules
module.exports = {
    getservicio,
    servicioAll,
    postservicio,
    updateServicio,
    eliminarServicio,
};