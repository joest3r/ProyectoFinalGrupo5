/* CONTROLADOR PARA LA RUTA AUTH */

const authControllers = {

    login: (req, res) => { res.render("./login", { title: "Login | FunkoShop" }) },
    //loginPOST: (req,res) => res.send('Route for admin login post'),
    register: (req, res) => { res.render("./register", { title: "Registro | FunkoShop" }) },
    //registerPOST: (req,res) => res.send('Route for admin register post')

}

module.exports = authControllers;