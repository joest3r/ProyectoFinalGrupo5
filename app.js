const express = require('express'); //Instancia express requerida

const app = express(); // instancia express configurada

const mainRoutes = require('./src/routes/mainRoutes');//Requiero mi archivo de rutas
const authRoutes = require('./src/routes/authRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const shopRoutes = require('./src/routes/authRoutes');

app.use(express.static('public'));

app.use('/', mainRoutes);
app.use('/admin', authRoutes);
app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);

app.listen(4000,() => console.log("Servidor corriendo en http://localhost:4000"));