//requiring modules
const express = require("express");
const db = require("../Models");

const Proveedor = db.proveedor;

const postproveedor = async (req, res) => {
    try {
        const nombre = req.body?.nombre;
        const identificador = req.body?.identificador;
        const telefono = req.body?.telefono;
        const celular = req.body?.celular;
        const email = req.body?.email;
        const direccion = req.body?.direccion; 
        
        if (!nombre){
          return res.status(400).json({ message: 'Bad request, name not found' });
        }
        const save = await Proveedor.create({
          nombre,
          identificador,
          telefono,
          celular,
          email,
          direccion
        })
        return res.status(201).json({ proveedor: save });
    } catch (error) {
        console.log(error)
        
    }
}

const updateProveedor = async (req, res) => {
    try {
        const update = await Proveedor.update({
            nombre: req.body?.nombre,
            identificador: req.body?.identificador,
            telefono: req.body?.telefono,
            celular: req.body?.celular,
            email: req.body?.email,
            direccion: req.body?.direccion,
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ proveedor: update });
    } catch (error) {
        console.log(error)
    }
}

const eliminarProveedor = async (req, res) => {
    try {
        const update = await Proveedor.update({
            status: false,
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ proveedor: update });
    } catch (error) {
        console.log(error)
    }
}

const proveedorAll = async (req, res) => {
    try {
        const proveedor = await Proveedor.findAll()
        return res.json({ proveedor });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

const getproveedor = async (req, res) => {
    const { id } = req.params // Extrae el ID del parámetro de la solicitud
    try {
        const proveedor = await Proveedor.findAll({
            where: {
                id: [id],
                status: true,
            },
        })
        return res.json({ proveedor });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};



//exporting the modules
module.exports = {
    getproveedor,
    proveedorAll,
    postproveedor,
    updateProveedor,
    eliminarProveedor,
};