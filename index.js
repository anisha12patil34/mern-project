const Express = require("express");
const server = Express();
const BodyPa = require("body-parser");
const MonGO = require("mongoose");
const cors = require("cors");
const {displayData,postData,updateData,deleteData,updateStatus} = require("../mern project/src/controllers/control");

server.use(cors());
server.use(BodyPa.json());
MonGO.connect("mongodb://localhost:27017/anisha_mernProject");
MonGO.connection.on("connected",()=>{
    console.log("compase connected");
})

server.get("/display",displayData);
server.post("/post",postData);
server.delete("/delete",deleteData);
server.put("/update",updateData);
server.put("/statusUpdate", updateStatus);

server.listen(1821,()=>{              //port = 1821..
    console.log("server has started");
})



