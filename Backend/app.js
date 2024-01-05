const express = require('express');
const studentModel = require('./Model/student')
const cors = require('cors')
const app = new express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

// post api
app.post('/add',(req,res)=>{
    console.log(req.body)
    new studentModel(req.body).save();
    res.send("data added")
    
})
 
// get
app.get('/view',async(req,res)=>{
    var result = await studentModel.find()
    res.json(result)
})

// delete
app.delete('/remove/:id',async(req,res)=>{
 let id = req.params.id;
 await studentModel.findByIdAndDelete(id);
 res.send("deleted")
})
// update
app.put("/edit/:id",async(req,res)=>{
    let id = req.params.id;
    await studentModel.findByIdAndUpdate(id,req.body)
    res.send("Updated");
})


app.listen(8080,()=>{
    console.log("port 8080 is up and running")
})

