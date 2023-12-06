const mainControllers = {
    home: (req,res) => res.send('Routes for Home View'),
    contact: (req,res) => res.send('Routes for Contact View'),
    about: (req,res) => res.send('Routes for About View'),
    faqs: (req,res) => res.send('Routes for Faqs View')
}

module.exports = mainControllers;