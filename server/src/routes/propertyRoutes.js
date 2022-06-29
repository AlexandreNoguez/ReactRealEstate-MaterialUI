const express = require('express');
const routes = express.Router();

const {
    registerNewProperty,
    listAllProperty,
    editPropertyRegister,
    listOnePropertyById,
    deletePropertyById
} = require('../controllers/propertyController')

// authRoutes
routes.post('/', registerNewProperty);
routes.get('/:id', listOnePropertyById);
routes.get('/', listAllProperty);
routes.put('/:id', editPropertyRegister);
routes.delete('/:id', deletePropertyById);

module.exports = routes;
