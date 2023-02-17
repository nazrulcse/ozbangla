signupValidation = (req,res,next) => {
    let error= []
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    
    if(req.body.email.length == 0 ){
        error.push('email is required')
    }
    if( !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.body.email))){
        error.push('Invalid email')
    }

    if(req.body.username.length == 0){
        error.push('username is required')
    } 

    if(req.body.contact_no.length == 0){
        error.push('contact number is required')
    } 

    if( !(/^.{8,10}$/.test(req.body.password))){
        error.push('password must be 8 to 10 Characters Long.')
    }

    if(error.length > 0){
        return res.status(403).send({
            message: "validation error",
            error
          });
    }
    next();
}

const validator = {
    signupValidation: signupValidation
  };

module.exports = validator;