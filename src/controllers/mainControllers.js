/*const mainControllers = {
    home: (req,res) => res.send('Routes for Home View'),
    contact: (req,res) => res.send('Routes for Contact View'),
    about: (req,res) => res.send('Routes for About View'),
    faqs: (req,res) => res.send('Routes for Faqs View')
}*/

//const fs = require("fs");
//const funkoShopJSON = JSON.parse(fs.readFileSync("../../funkoshop.json"));

module.exports = {
    index: (req,res)=>{
        res.render("index",{title:"Home | FunkoShop"})
    },

}