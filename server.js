const express = require("express");
const app = express();
const path = require('path');
const bodyparser = require('body-parser');
const session = require('express-session');

const port = 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))

app.set('view engine', 'ejs')

app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-store');
    next();
  });

const credential = {
    email:'hari@gmail.com',
    password:'1234'
}
//load static 
app.use('/static',express.static(path.join(__dirname,'public')))

app.use(session({
    secret:'keyboard cat',
    resave:true,
    saveUninitialized:true,
}));


app.get('/',(req,res)=>{
    if(req.session.logState){
        res.render('dashboard',{user:credential.email})
    }else{
        res.render('base',{title:'login_form'})
    }
    
})

app.post("/",(req,res)=>{
    if (req.body.email==credential.email && req.body.password==credential.password){
        req.session.logState = true
        res.redirect('/')
    }else{
        res.render('base',{title:'login_form',login:"Invalid email-id/password"})
    }
})

app.post("/logOut",(req,res)=>{
    req.session.logState=false
    res.redirect("/")
})

app.listen(port,()=>{(console.log("listening to the server http://localhost:3000"))})