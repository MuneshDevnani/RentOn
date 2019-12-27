const nodemailer= require('nodemailer');

exports.user_contact =  (req, res, next) => {
    const output=`
    <p>You have new contact request</p>
    <h3>Contact details</h3>
    <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    <li>Subject: ${req.body.subject}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.yourMessage}</p>
    `;
    const sender=`
    <li>Email: ${req.body.email}</li>
    `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
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

  // send mail with defined transport object
  let info = {
    from: '"Nodemailer Contact"  <muneshdewnani@gmail.com> ', // sender address
    to: 'muneshdewnani@gmail.com', // list of receivers
    subject: "Node contact request", // Subject line
    text: "Hello world?", // plain text body
    html: output // html body
  }
   
  transporter.sendMail(info , (error,info) =>{
    if(error){
     return console.log(error)
    }else{
      res.status(201).json({
        message: 'Your message was sent via mail successfully',
        state:true
      });
    }
  })
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

}