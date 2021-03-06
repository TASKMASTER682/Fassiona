const dotenv=require('dotenv');
const express=require("express");
const ejs=require('ejs');
const connectDB=require('./config/db');

const passport=require("passport");
const session=require('express-session')

const app =express();
app.use(express.static("public"));
app.set('view engine','ejs');
//loading config
dotenv.config({path:'./config/config.env'});

require('./config/passport')(passport);
//usedb
connectDB();

//init middleware
app.use(express.json({extended:false}));
//express session middleware
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    
}))
//passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.get('/',(req,res)=>res.send('Api running'));
//defining routes
app.use("/api/users",require('./routes/api/users'));

app.use("/api/auth",require('./routes/api/auth'));


const PORT=process.env.PORT||5000

app.listen(PORT,()=> console.log(`server running at ${process.env.NODE_ENV} mode on port ${PORT}`)
);