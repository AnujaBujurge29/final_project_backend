const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
   name:{
      type:String,
      required: true
   },
   author:{
      type:String,
      required: true
   },
   price:{
      type:Number,
      required: true
   },
   description:{
      type:String
   },
   availability:{
      type:Boolean,
      required: true
   },
   image:{
      type:String,
   },
   
},
{
   timestamps: true,
   versionKey: false, // Here You have to add.
})

const BookSchema = mongoose.model('BookList', bookSchema)

module.exports = BookSchema