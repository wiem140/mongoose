const mongoose = require ('mongoose');

const {Schema}= mongoose;

const PersonShema = new Schema ({
   name:{type:String,required:true},
    age:{type: Number},
    favoritfood:{type:String,required:true}

})

const PersonDB = mongoose.model("Person", PersonShema)

module.exports= PersonDB