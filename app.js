const express = require("express");
const path = require("path");
require("./srcc/db/conn");
const User = require("./srcc/models/usermessage");
const Register = require("./srcc/models/register");
const hbs = require("hbs"); 
const { registerPartials } = require ("hbs");
const { expr } = require("jquery");
const login = require("./srcc/models/login");
const register = require("./srcc/models/register");
const { resolveSoa } = require("dns");
const  app = express();
const port = process.env.PORT || 3000;

//setting the path
const staticpath =  path.join(__dirname , "public");
const templatepath =  path.join(__dirname , "templates/views");
const partialpath =  path.join(__dirname , "templates/partials");


//middleware

app.use(`/css` , express.static(path.join(__dirname,"node_modules/bootstrap/dist/css")));
app.use(`/js` , express.static(path.join(__dirname,"node_modules/bootstrap/dist/js")));
app.use(`/jq` , express.static(path.join(__dirname,"node_modules/jquery/dist")));
app.use(express.urlencoded({extended:false}))
app.use( express.static(staticpath));
app.set("view engine", "hbs");
app.set("views", templatepath);
hbs.registerPartials(partialpath);

//routing
//app.get(path,callback)
app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/register",(req,res)=>{
    res.render("register");
});

app.post("/register" , async(req , res)=>{
    try {
       // res.send(req.body);
       console.log(req.body)
       const userData= new Register(req.body)
       await userData.save();
       res.status(201).render("login");
    } catch (error) {
        res.status(500).send(error);
    }
})

app.get("/login",(req,res)=>{
    res.render("login");
});

app.post("/login" , async(req , res)=>{
    try {
        const { email, password } = req.body;
        const user = await Register.findOne({ email }).select('+password');
        if (!user) {
            return new Error('Signup first');
          }
       // res.send(req.body);
       console.log(req.body)
       const userData= new login(req.body)
    
       await userData.save();
       res.status(201).render("user_service");



    } catch (error) {
        res.status(500).send(error)
    }
})

app.post("/contact" , async(req , res)=>{
    try {
       // res.send(req.body);
       console.log(req.body)
       const userData= new User(req.body)
       await userData.save();
       res.status(201).render("index");
    } catch (error) {
        res.status(500).send(error);
    }
})



app.get("/notes",(req,res)=>{
    res.render("notes");
});

app.post("/notes" , async(req , res)=>{
    try {
       // res.send(req.body);
       console.log(req.body)
       const userData= new Register(req.body)
       await userData.save();
       res.status(201).render("notes");
    } catch (error) {
        res.status(500).send(error);
    }
})

app.get("/lectures",(req,res)=>{
    res.render("lectures");
});

app.post("/lectures" , async(req , res)=>{
    try {
       // res.send(req.body);
       console.log(req.body)
       const userData= new Register(req.body)
       await userData.save();
       res.status(201).render("lectures");
    } catch (error) {
        res.status(500).send(error);
    }
})

app.get("/blogs",(req,res)=>{
    res.render("blogs");
});

app.post("/blogs" , async(req , res)=>{
    try {
       // res.send(req.body);
       console.log(req.body)
       const userData= new Register(req.body)
       await userData.save();
       res.status(201).render("blogs");
    } catch (error) {
        res.status(500).send(error);
    }
})

app.get("/contact",(req,res)=>{
    res.render("contact");
});

app.post("/contact" , async(req , res)=>{
    try {
       // res.send(req.body);
       console.log(req.body)
       const userData= new Register(req.body)
       await userData.save();
       res.status(201).render("contact");
    } catch (error) {
        res.status(500).send(error);
    }
})

// server create 
app.listen(port , ()=> {
    console.log(`server is running at port no ${port}`);
})