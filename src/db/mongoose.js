const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/task-1',{
    useNewUrlParser : true,
    useCreateIndex : true
})