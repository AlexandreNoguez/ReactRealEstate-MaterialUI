const express = require('express');
const cors = require('cors')
const app = express();
const propertyRoutes = require('./routes/propertyRoutes')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/api/catalog', propertyRoutes);

app.listen(3333);