
const { User } = require('../db/connection');

const bcrypt = require('bcrypt');

const index = (req, res) =>{
    
    User.scope('withOutPassword').findAll({})
    .then(data =>{

        res.status(200).json(data);
    })
    .catch(err =>{

        res.status(404).json({
            ok: false,
            err: err
        });
    });
   
}



const create = (req, res) =>{

    User.create({
        firstName: req.body.first_name,
        lastName : req.body.last_name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
        
    }).then(data =>{
        
        res.status(201).json({
            ok: true,
            message: 'OK, register success!'
        });

        
    }).catch(err =>{
        res.status(404).json({
            ok: false,
            err: err
        });
        
    });
}


module.exports = {
    index,
    create
}