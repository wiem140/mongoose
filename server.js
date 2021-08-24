const express = require('express');
const connectDB= require('./DB/connectDB');
const CoffeeDB= require('./Model/model');
// new Coffee
const Coffee = new CoffeeDB( {title:"tee", price:2})
Coffee.save ((err)=>{
    if (err) return handleError(err)
    //save
})

//Find All
/*const search = async()=>{
    try{
const data = await CoffeeDB.find({});
console.log(data)
    }catch(err){
        console.log(err)

    }
}
search()*/
//Find one
/*const search = async()=>{
    try{
const data = await CoffeeDB.find({title:"direct"});
console.log(data)
    }catch(err){
        console.log(err)

    }
}
search()*/
//Find by id
/*const search = async()=>{
    try{
const data = await CoffeeDB.findById({_id:"6124c7d465f6fd30082a1fd8"});
console.log(data)
    }catch(err){
        console.log(err)

    }
}
search()*/

/*const query ={title:"express"}
const UpdateCoffee= async()=>
{
     await CoffeeDB.findOneAndUpdate(query,{title:"jus"},(err,data)=>{
        try{
console.log("update")
        } catch (err){
           console.log(err) 
        }
    })
}
UpdateCoffee()*/


//Fin one delet
const Delete = async()=>{
    await CoffeeDB.findOneAndDelete({_id:"6124c81647415107b07b9880"}, (err,data)=>{
        try{
console.log("removed Data",data)
        }catch(error){
            console.log(err)

        }
    })
}


Delete()
connectDB()
const app = express()
const port = 3000


app.listen(port, (err) => {
    err?
    console.log(err) :
    console.log(`Server running on the port ${port}!`)  
} )