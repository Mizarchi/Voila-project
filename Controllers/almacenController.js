//requiring modules
const express = require("express");
const db = require("../Models");

const Almacen = db.almacen;

const postalmacen = async (req, res) => {
    try {
        const nameAlmacen = req.body?.nameAlmacen;
        const direccion = req.body?.direccion;
        const descripcion = req.body?.descripcion;
        const idSede = req.body?.idSede;
        
        if (!nameAlmacen || !idSede){
          return res.status(400).json({ message: 'Bad request, name not found' });
        }
        const save = await Almacen.create({
          nameAlmacen,
          direccion,
          descripcion,
          idSede
        })
        return res.status(201).json({ almacen: save });
    } catch (error) {
        console.log(error)
        
    }
}

const updateAlmacen = async (req, res) => {
    try {
        const update = await Almacen.update({
            nameAlmacen: req.body?.nameAlmacen,
            direccion: req.body?.direccion,
            descripcion: req.body?.descripcion,
            idSede: req.body?.idSede,
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ almacen: update });
    } catch (error) {
        console.log(error)
    }
}

const eliminarAlmacen = async (req, res) => {
    try {
        const update = await Almacen.update({
            status: false,
          }, {
            where: {
              id: req.body?.id
            }
          })
          return res.status(201).json({ almacen: update });
    } catch (error) {
        console.log(error)
    }
}

const almacenAll = async (req, res) => {
    try {
        const almacen = await Almacen.findAll()
        return res.json({ almacen });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

const getalmacen = async (req, res) => {
    const { id } = req.params // Extrae el ID del parámetro de la solicitud
    try {
        const almacen = await Almacen.findAll({
            where: {
                id: [id],
                status: true,
            },
        })
        return res.json({ almacen });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};





//exporting the modules
module.exports = {
    getalmacen,
    almacenAll,
    postalmacen,
    updateAlmacen,
    eliminarAlmacen,
  //saveTodo,
  //getTodos,
  //gettodo,
  //deleteTodo,
  //updateTodo,
  //updatedTodo
};