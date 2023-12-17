/* CONTROLADOR PARA LA RUTA MAIN */

const fs = require("fs");
const { title } = require("process");
const funkoJSON = JSON.parse(fs.readFileSync("./src/database/funkoshop.json", "utf-8"));

module.exports = {
    index: (req, res) => {
        res.render("index", { title: "Home | FunkoShop", funko: funkoJSON })
    },
    contacto: (req,res) => {
        res.render("contacto",{title: "Contacto | FunkoShop"})
    }
}