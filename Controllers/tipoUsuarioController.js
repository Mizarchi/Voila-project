//requiring modules
const express = require("express");
const db = require("../Models");

const TipoUsuario = db.tipoUsuario;

const posttipousuario = async (req, res) => {
    try {
        const tipoUsuario = req.body?.tipoUsuario;
        
        if (!tipoUsuario){
          return res.status(400).json({ message: 'Bad request, name not found' });
        }
        const save = await TipoUsuario.create({
            tipoUsuario
        })
        return res.status(201).json({ tipoUsuario: save });
    } catch (error) {
        console.log(error)
        
    }
}

const updateTipoUsuario = async (req, res) => {
    try {
        const update = await TipoUsuario.update({
            tipoUsuario: req.body?.tipoUsuario,
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ tipoUsuario: update });
    } catch (error) {
        console.log(error)
    }
}

const eliminarTipoUsuario = async (req, res) => {
    try {
        const update = await TipoUsuario.update({
            status: false,
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ tipoUsuario: update });
    } catch (error) {
        console.log(error)
    }
}

const tipoUsuarioAll = async (req, res) => {
    try {
        const tipoUsuario = await TipoUsuario.findAll()
        return res.json({ tipoUsuario });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

const gettipoUsuario = async (req, res) => {
    const { id } = req.params // Extrae el ID del parámetro de la solicitud
    try {
        const tipoUsuario = await TipoUsuario.findAll({
            where: {
                id: [id],
                status: true,
            },
        })
        return res.json({ tipoUsuario });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};


//exporting the modules
module.exports = {
    gettipoUsuario,
    tipoUsuarioAll,
    posttipousuario,
    updateTipoUsuario,
    eliminarTipoUsuario,
};