const mongoose = require("mongoose")
const table = new mongoose.Schema({
    item : String,
    description : String,
    isCompleted : Boolean
}); 

const Table = mongoose.model("st2_ToDoList",table);

module.exports={Table};