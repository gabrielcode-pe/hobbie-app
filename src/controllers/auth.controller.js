require('dotenv').config();

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const { User } = require('../db/connection');

const login = (req, res) =>{

    User.findOne({ where : {email: req.body.email}})
    .then(userFound  =>{

        let match = bcrypt.compareSync(req.body.password, userFound.password);


        if(match){
            
            return res.status(200).json({
                ok: true,
                token: jwt.sign({
                    user: {
                        id: userFound.id,
                        firstName: userFound.firstName,
                        lastName: userFound.lastName,
                        email: userFound.email,
                        createdAt: userFound.createdAt,
                        updatedAt: userFound.updatedAt
                    }
                }, process.env.TOKEN_SIGNATURE, {expiresIn : process.env.TOKEN_EXPIRE})
            });
        }

        res.status(401).json({
            ok: false,
            message: 'email or password are iconrrect'
        });

    })
    .catch(err =>{
        res.status(401).json({
            ok: false,
            err
        });
    });

    
}


module.exports = {
    login
}