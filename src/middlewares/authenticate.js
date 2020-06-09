
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) =>{

    
    if(!req.get('authorization')){

        return res.status(401).json({
            ok: false,
            err: 'This request requires Bearer token'
        });
    }

    let tokenBearer = req.get('authorization');

    // Spliting token Bearer
    let token = tokenBearer.split(' ')[1];
    
    jwt.verify(token, process.env.TOKEN_SIGNATURE, (err , decoded) =>{
        
        if(err){

            return res.status(401).json({
                ok: false,
                err
            });
        }
        

        next();
    });

}


module.exports = {
    verifyToken
}