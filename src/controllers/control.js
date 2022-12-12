const { request, response } = require("express");
const Express = require("express");
const {Table}=require("../model/models");

const displayData = async (request,response)=>{
      var id = request.query.id;
      if(id){
        try{
        var display = await Table.findById({id});
        }
        catch{
            display = null;
        }
    }else{
        var display = await Table.find();    //display whole table
    }
    return response.json(display);
};

const postData = async(request,response)=>{
    await Table.create(request.body);
    return response.json("Data created");
    
}

const updateData = async (request, response) => {
    var id = request.query.id;
    try{
        var data = await Table.findById(id);
        if(!data){
            return response
                .status(404)
                .json({status: "Error", msg: "Id does not exist"});
        }
    }catch {
        return response
            .status(404)
            .json({status: "Error", msg: "Id does not exist"});
    }
    console.log(request.body, id);
    await Table.findByIdAndUpdate(id, request.body);
    return response.json({status:"Data Updated Successfully"});
};

const deleteData = async (request, response) => {
    var id = request.query.id;
    await Table.findByIdAndDelete(id);
    return response.json({ status:"data is Deleted" });
};

const updateStatus = async (request, response) => {
    var id = request.query.id;
    try{
        var data = await Table.findById(id);
        if(!data){
            return response
                .status(404)
                .json({status: "Error", msg: "Id does not exist"});
        }
    }catch {
        return response
            .status(404)
            .json({status: "Error", msg: "Id does not exist"});
    }
    console.log(request.body, id);
    await Table.findByIdAndUpdate(id, request.body);
    return response.json({status:"Data Updated Successfully"});
};

module.exports={displayData,postData,updateData,deleteData,updateStatus};