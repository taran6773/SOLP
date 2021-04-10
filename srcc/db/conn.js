const mongoose = require("mongoose");

//creating a database
mongoose.connect("mongodb://localhost:27017/Learning_platform",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    family:4,
    serverSelectionTimeoutMS:50000
}).then(()=>{
    console.log("Connection successful")
}).catch((error)=>{
    console.log(error);
})
