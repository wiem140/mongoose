const express = require('express');
const connectDB= require('./DB/connectDB');
const PersonDB=require('./Model/model');
// new Person
/*const Person = new PersonDB( {name:"rym", age:30, favoritfood:"soupe"})
Person.save ((err)=>{
    if (err) return handleError(err)
    //save
})*/
/*const Person = new PersonDB( {name:"wiem", age:26, favoritfood:"pizza"})
Person.save ((err)=>{
    if (err) return handleError(err)
    //save
})*/
/*const Person = new PersonDB( {name:"mohamed", age:12, favoritfood:"spaghetti"})
Person.save ((err)=>{
    if (err) return handleError(err)
    //save
})*/

//Find All
/*const search = async()=>{
    try{
const data = await PersonDB.find({});
console.log(data)
    }catch(err){
        console.log(err)

    }
}
search()*/
//Find one
/*const search = async()=>{
    try{
const data = await PersonDB.find({name:"wiem"});
console.log(data)
    }catch(err){
        console.log(err)

    }
}
search()*/
//Find by id
/*const search = async()=>{
    try{
const data = await PersonDB.findById({_id:"6124fc9537f9833e909826c8"});
console.log(data)
    }catch(err){
        console.log(err)

    }
}
search()*/
//Find One Person which has a certain food in the person's favorites
// const search = async() => {
//     try {
//        const data = await PersonDB.findOne({favoritfood: ["Pizza"]})
//        console.log(data)
//     } catch (err) {
//         console.error(err)
//     }
//}
//search()

/*const query ={name:"mohamed"}
const UpdatePerson= async()=>
{
     await PersonDB.findOneAndUpdate(query,{name:"sami"},(err,data)=>{
        try{
console.log("update")
        } catch (err){
           console.log(err) 
        }
    })
}
UpdatePerson()*/


//Fin one delet
/*const Delete = async()=>{
    await PersonDB.findOneAndDelete({_id:"6124fe29f7c10208ec1a0872"}, (err,data)=>{
        try{
console.log("removed Data",data)
        }catch(error){
            console.log(err)

        }
    })
}

Delete()*/
//Delete Many Documents with model.remove()

/* const DeletePerson = async() => {
     const res = await PersonDB.remove({name: "wiem"}, (err, data) => {
         try {
            console.log("Persons removed ")
         } catch (err) {
            console.error(err) 
         }
     })
 }
  DeletePerson()*/
  //_Find people who like pizza

/*const chainSearch = async() => {
    try {
      const data = await PersonDB.find({favoriteFoods: {$elemMatch: {$eq: "pizza"}}}).sort({name: 'wiem'}).limit(2).select({age: 0, __v: 0}).exec()
          console.log(data)
    } catch (err) {
        console.error(err)
    }
}
chainSearch()*/


connectDB()
const app = express()
const port = 3000


app.listen(port, (err) => {
    err?
    console.log(err) :
    console.log(`Server running on the port ${port}!`)  
} )