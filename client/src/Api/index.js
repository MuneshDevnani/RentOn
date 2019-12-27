// import axios from 'axios';

const app={}

app.login = async function (email, password,cb){
  await fetch('http://localhost:4000/users/login', {
        method :"POST",
        headers:{
            'Content-type' :'application/json'
        },
        body: JSON.stringify({
          email:email,
          password:password
        })
       })
       .then(response =>{
         response.json().then(message =>{
           cb(message)
         })
       })
       .catch(err =>{
        cb(err)
       })
}

app.signup = async function (email, password,cb){
    await fetch('http://localhost:4000/users/signup', {
          method :"POST",
          headers:{
              'Content-type' :'application/json'
          },
          body: JSON.stringify({
            email:email,
            password:password
          })
         })
         .then(response =>{
           response.json().then(message =>{
             cb(message)
           })
         })
         .catch(err =>{
           cb(err)
         })
  }

  app.account = async function (firstName,lastName,email,dateOfBirth,phone,address,cb){
    await fetch('http://localhost:4000/account/', {
          method :"POST",
          headers:{
             'Authorization' : 'Bearer '+localStorage.token,
              'Content-type' :'application/json'
          },
          body: JSON.stringify({
            firstName: firstName,
            lastName:lastName,
            email:email,
            dateOfBirth:dateOfBirth,
            phone:phone,
            address:address
          })
         })
         .then(response =>{
           response.json().then(message =>{
             cb(message)
           })
         })
         .catch(err =>{
           cb(err)
         })
  }

  app.accountInfo = async function (cb){
    await fetch('http://localhost:4000/account/', {
          method :"GET",
          headers:{
             'Authorization' : 'Bearer '+localStorage.token,
              'Content-type' :'application/json'
          }
         })
         .then(response =>{
           response.json().then(message =>{
             cb(message)
           })
         })
         .catch(err =>{
           cb(err)
         })
  }

  app.postItems = async function (title,RentPrice,category,itemImage,desc,cb){
    await fetch('http://localhost:4000/item/', {
           method :"POST",
          headers:{
              'Authorization' : 'Bearer '+localStorage.token,
              'Content-type' :'application/json'
          },
          body: JSON.stringify({
            title:title,
            RentPrice:RentPrice,
            desc:desc,
            category:category,
            itemImage:itemImage,
          })
         })
         .then(response =>{
           response.json().then(message =>{
             cb(message)
           })
         })
         .catch(err =>{
           cb(err)
         })
  }

  app.getItems = async function (cb){
    await fetch('http://localhost:4000/item/', {
           method :"GET",
          headers:{
              'Content-type' :'application/json'
          },
         })
         .then(response => {
          response.json().then(message => {
            cb(message)
          })
         })
         .catch(err =>{
           throw new Error(err)
         })
  }

  app.Itemdetails = async function(id,cb) {
    await fetch('http://localhost:4000/item/'+id)
    .then(response => {
        response.json().then(message => {
            cb(message)
        })
    })
    .catch(err => {
        throw new Error(err)
    }) 
}

app.Itemdelete = async function(id,cb) {
  await fetch('http://localhost:4000/item/'+id,{
    method: 'DELETE',
      headers: {
        'Authorization' : 'Bearer '+localStorage.token,
          'content-type' : 'application/json'
      },
  })
  .then(response => {
      response.json().then(message => {
        console.log(message);
          cb(message)
      })
  })
  .catch(err => {
      throw new Error(err)
  }) 
}


app.contact = async function(name, email, subject, yourMessage,cb) {
  await fetch('http://localhost:4000/users/contact/',{
      method: 'POST',
      headers: {
          'content-type' : 'application/json'
      },
      body: JSON.stringify({
          name:name,
          email: email,
          subject: subject,
          yourMessage: yourMessage
      })
  })
  .then(response => {
      response.json().then(message => {
          cb(message)
      })
  })
  .catch(err => {
      cb(err)
  })
}

app.forgotpassword = async function(email,cb) {
  await fetch('http://localhost:4000/users/forgotpassword/',{
      method: 'POST',
      headers: {
          'content-type' : 'application/json'
      },
      body: JSON.stringify({
          email: email,
      })
  })
  .then(response => {
      response.json().then(message => {
          cb(message)
      })
  })
  .catch(err => {
      cb(err)
  })
}

app.resetPage = async function (token,cb){
  await fetch('http://localhost:4000/account/', {
        method :"GET",
        headers:{
           'Authorization' : 'Bearer '+token,
            'Content-type' :'application/json'
        }
       })
       .then(response =>{
         response.json().then(message =>{
           cb(message)
         })
       })
       .catch(err =>{
         cb(err)
       })
}

app.resetPassword = async function(token,password,cb) {
  await fetch('http://localhost:4000/users/resetPassword/',{
      method: 'POST',
      headers: {
          'Authorization' : 'Bearer '+token,
          'content-type' : 'application/json'
      },
      body: JSON.stringify({
          password: password,
      })
  })
  .then(response => {
      response.json().then(message => {
          cb(message)
      })
  })
  .catch(err => {
      cb(err)
  })
}

export default app;