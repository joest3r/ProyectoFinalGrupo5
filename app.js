/* ENTRY POINT */ 

const express = require("express"); // Instancia express requerida
const path = require("path"); // Instancio el PATH
const port = 3000; // Defino el puerto para el server
const app = express(); // Instancia express configurada

/* Incluyo las Rutas */

const mainRoutes = require("./src/routes/mainRoutes");
const authRoutes = require("./src/routes/authRoutes");
const adminRoutes = require("./src/routes/adminRoutes");
const shopRoutes = require("./src/routes/shopRoutes");

/* Motor de Plantillas EJS */

app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

/* Defino el routing */

app.use("/", mainRoutes);
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);

/* Mesnsaje de verificación para saber que el server corre bien*/
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));