const authControllers = {

    loginGET: (req,res) => res.send('Route for admin login View'),
    loginPOST: (req,res) => res.send('Route for admin login post'),
    registerGET: (req,res) => res.send('Route for admin register View'),
    registerPOST: (req,res) => res.send('Route for admin register post')

}

module.exports = authControllers;