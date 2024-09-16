//requiring modules
const express = require("express");
const db = require("../Models");

const TipoGeneral = db.tipoGeneral;

const posttipogeneral = async (req, res) => {
    try {
        const tipo = req.body?.tipo;
        const nombre = req.body?.nombre;
        const descripcion = req.body?.descripcion;
        const orden = req.body?.orden;
        
        if (!tipo || !nombre){
          return res.status(400).json({ message: 'Bad request, name not found' });
        }
        const save = await TipoGeneral.create({
            tipo,
            nombre,
            descripcion,
            orden
        })
        return res.status(201).json({ tipoGeneral: save });
    } catch (error) {
        console.log(error)
        
    }
}

const updateTipoGeneral = async (req, res) => {
    try {
        const update = await TipoGeneral.update({
            tipo: req.body?.tipo,
            nombre: req.body?.nombre,
            descripcion: req.body?.descripcion,
            orden: req.body?.orden
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ tipoGeneral: update });
    } catch (error) {
        console.log(error)
    }
}

const eliminarTipoGeneral = async (req, res) => {
    try {
        const update = await TipoGeneral.update({
            status: false,
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ tipoGeneral: update });
    } catch (error) {
        console.log(error)
    }
}

const tipoGeneralAll = async (req, res) => {
    try {
        const tipoGeneral = await TipoGeneral.findAll()
        return res.json({ tipoGeneral });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

const gettipoGeneral = async (req, res) => {
    const { id } = req.params // Extrae el ID del parámetro de la solicitud
    try {
        const tipoGeneral = await TipoGeneral.findAll({
            where: {
                id: [id],
                status: true,
            },
        })
        return res.json({ tipoGeneral });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};



//exporting the modules
module.exports = {
    gettipoGeneral,
    tipoGeneralAll,
    posttipogeneral,
    updateTipoGeneral,
    eliminarTipoGeneral,
};