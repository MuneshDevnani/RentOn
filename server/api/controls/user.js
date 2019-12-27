const jwt= require('jsonwebtoken');
const User = require('../models/user');

exports.user_signup= async (req, res,next) => {
  try{
      const user= await User.create(req.body);
      const { id, email } = user;

      const token = jwt.sign({id, email}, process.env.SECRET);

      res.json({id, email, token});
  } catch(err){
        res.json({
          message :'Sorry, that email is already taken',
          state:false
        })   
      next(err);
  }
};

 exports.user_login= async(req, res, next) =>{
  try{
      const user = await User.findOne({ email: req.body.email});
      const { id , email, accountInfo } = user;
      const valid = await user.comparePassword(req.body.password);

      if(valid){
          const token = jwt.sign({id, email, accountInfo}, process.env.SECRET);
          
          res.json({
             message: 'Auth successful',
              id,
              email,
              accountInfo,
              token,
              state:true
          });
      }else{
        throw new Error();
      }
  }catch(err){
        return res.json({
        message: 'Invalid Username/Password',
        state:false
        });
      next(err);
  }
};

exports.userPassword_update_Password = (req, res, next) => {
      const { id: userId } = req.decoded
      User.findById(userId)
      .then(user =>{
        user.password = req.body.password;
    
      user.save()
    .then(user => res.json('Password Updated'))
})
.catch(err => res.status(400).json('Error :' + err))
};
 