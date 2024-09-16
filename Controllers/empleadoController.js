//requiring modules
const express = require("express");
const db = require("../Models");

const Empleado = db.empleado;

const postempleado = async (req, res) => {
    try {
        const nombre = req.body?.nombre;
        const apellido = req.body?.apellido;
        const cedula = req.body?.cedula;
        const telefono = req.body?.telefono;
        const celular = req.body?.celular;
        const email = req.body?.email;
        const direccion = req.body?.direccion;
        const idSede = req.body?.idSede;
        
        if (!nombre || !apellido || !idSede){
          return res.status(400).json({ message: 'Bad request, name not found' });
        }
        const save = await Empleado.create({
          nombre,
          apellido,
          cedula,
          telefono,
          celular,
          email,
          direccion,
          idSede
        })
        return res.status(201).json({ empleado: save });
    } catch (error) {
        console.log(error)
        
    }
}

const updateEmpleado = async (req, res) => {
    try {
        const update = await Empleado.update({
            nombre: req.body?.nombre,
            apellido: req.body?.apellido,
            cedula: req.body?.cedula,
            telefono: req.body?.telefono,
            celular:  req.body?.celular,
            email: req.body?.email,
            direccion: req.body?.direccion,
            idSede: req.body?.idSede
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ empleado: update });
    } catch (error) {
        console.log(error)
    }
}

const eliminarEmpleado = async (req, res) => {
    try {
        const update = await Empleado.update({
            status: false,
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ empleado: update });
    } catch (error) {
        console.log(error)
    }
}

const empleadoAll = async (req, res) => {
    try {
        const empleado = await Empleado.findAll()
        return res.json({ empleado });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

const getempleado = async (req, res) => {
    const { id } = req.params // Extrae el ID del parámetro de la solicitud
    try {
        const empleado = await Empleado.findAll({
            where: {
                id: [id],
                status: true,
            },
        })
        return res.json({ empleado });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};



//exporting the modules
module.exports = {
    getempleado,
    empleadoAll,
    postempleado,
    updateEmpleado,
    eliminarEmpleado,
};