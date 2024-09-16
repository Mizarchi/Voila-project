//requiring modules
const express = require("express");
const db = require("../Models");

const Cliente = db.cliente;

const postcliente = async (req, res) => {
    try {
        const nombre = req.body?.nombre;
        const apellido = req.body?.apellido;
        const cedula = req.body?.cedula;
        const telefono = req.body?.telefono;
        const celular = req.body?.celular;
        const email = req.body?.email;
        const direccion = req.body?.direccion;
        
        if (!nombre || !apellido){
          return res.status(400).json({ message: 'Bad request, name not found' });
        }
        const save = await Cliente.create({
          nombre,
          apellido,
          cedula,
          telefono,
          celular,
          email,
          direccion
        })
        return res.status(201).json({ cliente: save });
    } catch (error) {
        console.log(error)
        
    }
}

const updateCliente = async (req, res) => {
    try {
        const update = await Cliente.update({
            nombre: req.body?.nombre,
            apellido: req.body?.apellido,
            cedula: req.body?.cedula,
            telefono: req.body?.telefono,
            celular: req.body?.celular,
            email: req.body?.email,
            direccion: req.body?.direccion
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ cliente: update });
    } catch (error) {
        console.log(error)
    }
}

const eliminarCliente = async (req, res) => {
    try {
        const update = await Cliente.update({
            status: false,
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ cliente: update });
    } catch (error) {
        console.log(error)
    }
}

const clienteAll = async (req, res) => {
    try {
        const cliente = await Cliente.findAll()
        return res.json({ cliente });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

const getcliente = async (req, res) => {
    const { id } = req.params // Extrae el ID del parámetro de la solicitud
    try {
        const cliente = await Cliente.findAll({
            where: {
                id: [id],
                status: true,
            },
        })
        return res.json({ cliente });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};



//exporting the modules
module.exports = {
    getcliente,
    clienteAll,
    postcliente,
    updateCliente,
    eliminarCliente,
};