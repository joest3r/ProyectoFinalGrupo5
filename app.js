const express = require("express"); //Instancia express requerida
const path = require("path");

const port = 3000;

const app = express(); // instancia express configurada

//Rutas
const mainRoutes = require("./src/routes/mainRoutes");//Requiero mi archivo de rutas
const authRoutes = require("./src/routes/authRoutes");
const adminRoutes = require("./src/routes/adminRoutes");
const shopRoutes = require("./src/routes/shopRoutes");

/* Motor de Plantillas EJS */
app.set("views", path.join(__dirname, "src/views" ));
app.set("view engine" , "ejs");
app.use (express.static(path.join(__dirname,"public")));

//Rutas

app.use("/", mainRoutes);
app.use("/admin", authRoutes);
app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);

app.listen(port,() => console.log(`Servidor corriendo en el puerto ${port}`));