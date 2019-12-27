const crypto =require ('crypto');
const jwt= require('jsonwebtoken');
const User =require ('../models/user');

const nodemailer= require('nodemailer');

exports.forgotPassword = (req, res, next) => {
    if(req.body.email === ''){
        res.status(400).send('email required');
    }
    console.error(req.body.email);
    User.findOne({
           email:req.body.email,
    }).then((user) => {
        if(user === null){
            console.error('email not in database');
            res.status(403).json('Email Not Found');
        }else{
            // const token =crypto.randomBytes(20).toString('hex');
            const { id, email } = user;
            const token = jwt.sign({id, email}, process.env.SECRET);
            user.update({
                resetPasswordToken: token,
                resetPasswordExpires: Date.now() + 3600000,
            });
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                 port: 25,
                secure: false, // true for 465, false for other ports
                auth: {
                  user: process.env.EMAIL, // generated ethereal user
                  pass: process.env.EMAIL_PASS // generated ethereal password
                },
                tls:{
                  rejectUnauthorized:false 
                }
              }); 
              const mailOptions = {
                from: 'DemoEmail@gmail.com', // sender address
                to: `${user.email}`, // list of receivers
                subject: "Link To Reset Password", // Subject line
                text: 
                'You are receiving this because you (or someone else) have requested the reset of the password for your account. \n\n'
                + 'Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it: \n\n'
                +`http://localhost:3000/reset?t=${token}\n\n`
                +'If you did not request this, please ignore this email and your password will remain unchanged. \n',
              };
            //   res.json('sending mail');

              transporter.sendMail(mailOptions, (err, response) =>{
                  if(err) {
                      console.error('there was an error: ', err);
                  } else {
                      console.log('here is the res: ', response);
                      res.status(200).json({message:'Recovery Email Sent',state:true});
                  }
              });
        }
    });
}