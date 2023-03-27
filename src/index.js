const express=require('express')
require('./db/mongoose')
const Server=require('./models/server')

const app=express()
const port=process.env.PORT || 3000

app.use(express.json())


app.post('/servers',async (req,res)=>{
    const server = new Server(req.body)
    try{
        await server.save()
        res.status(201).send(server)
    }
    catch(e){
        res.status(400).send(e)
    }
})


app.get('/servers',async (req,res)=>{ 
    try{
        const servers = await Server.find({})
        res.send(servers)
    }
    catch(e){
        res.status(500).send(e)
    }
})


app.get('/servers/id/:id',async (req,res)=>{
    const id=req.params.id
    
    try{
        const server=await Server.find({id:id})
        if(!server){
            return res.status(404).send()
        }
        res.send(server)
    }
    catch(e){
        res.status(500).send(e)
    }
})


app.delete('/servers/:id',async (req,res)=>{
    const id=req.params.id
    try{
        const server = await Server.deleteOne({id:id})
        if(!server){
            res.status(404).send()
        }
        res.send(server)
    }
    catch(e){
        res.status(500).send(e)
    }
})

app.get('/servers/name/:name',async (req,res)=>{
    const name=req.params.name
    
    try{
        const server=await Server.find({name:name})
        if(!server){
            return res.status(404).send()
        }
        res.send(server)
    }
    catch(e){
        res.status(500).send(e)
    }
})




app.listen(port,()=>{
    console.log('Server is running up on port '+port)
})