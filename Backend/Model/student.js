const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://facultyassociate3:test@cluster0.7zxq31e.mongodb.net/Studentdb?retryWrites=true&w=majority")
.then(()=>{
    console.log("db connected")
})
.catch((err)=>console.log(err))

var Schema =mongoose.Schema;

var studentSchema = new Schema(
    {
        sname:String,
        age:Number,
        rollNo:Number,
        place:String,
        phoneNo:Number
    }
)

let studentModel = mongoose.model("student",studentSchema);

module.exports= studentModel;

