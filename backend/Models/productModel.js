const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
  
    title:{
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    price:{
        type: String,
        trim: true,
        required: true
    },
    description:{
        type: String,
        required: true
    },  
    category:{
        type: String,
        required: true
    }
}, {
    timestamps: true 
})

module.exports = mongoose.model("Products", productSchema)