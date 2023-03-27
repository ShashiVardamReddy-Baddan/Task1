const mongoose=require('mongoose')

const Server=mongoose.model('Server',{
    name:{
        type:String,
        required:true
    },
    id:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    framework:{
        type:String,
        required:true
    }
})

module.exports=Server