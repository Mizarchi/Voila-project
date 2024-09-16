//requiring modules
const express = require("express");
const db = require("../Models");

const Sede = db.sede;

const getsede = async (req, res) => {
    const { id } = req.params // Extrae el ID del parámetro de la solicitud
    try {
        const sede = await Sede.findAll({
            where: {
                id: [id],
                status: true,
            },
        })
        return res.json({ sede });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

const postsede = async (req, res) => {
    try {
        const name = req.body?.name;
        const descripcion = req.body?.descripcion;
        
        if (!name){
          return res.status(400).json({ message: 'Bad request, name not found' });
        }
        const save = await Sede.create({
          name,
          descripcion
        })
        return res.status(201).json({ sede: save });
    } catch (error) {
        console.log(error)
        
    }
}

const updateSede = async (req, res) => {
    try {
        const update = await Sede.update({
            name: req.body?.name,
            descripcion: req.body?.descripcion,
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ sede: update });
    } catch (error) {
        console.log(error)
    }
}

const eliminarSede = async (req, res) => {
    try {
        const update = await Sede.update({
            status: false,
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ sede: update });
    } catch (error) {
        console.log(error)
    }
}

const sedeAll = async (req, res) => {
    try {
        const sede = await Sede.findAll()
        return res.json({ sede });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}


//exporting the modules
module.exports = {
    getsede,
    postsede,
    sedeAll,
    updateSede,
    eliminarSede,
};