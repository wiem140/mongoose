const mongoose = require ('mongoose');

const {Schema}= mongoose;

const COffeeShema = new Schema ({
    title:{type:String,required:true},
    price:{type: Number}

})

const CoffeeDB = mongoose.model("coffee", COffeeShema)

module.exports= CoffeeDB