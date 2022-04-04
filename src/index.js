const express= require('express')
// const req = require('express/lib/request')
// const validator= require('validator')
require('./db/mongoose')

const userRouter =require('./router/user')

const app=express()

app.use(express.json())
// app.use(userRouter)


app.post('/users',(req,res)=>{
    const user=new User(req.body)

    user.save().then(()=>{
        res.send(user)
    }).catch((e)=>{
      res.send(e)
    })

})

app.get('/users',(req,res)=>{
    User.find({}).then((users)=>{
        res.send(users)
    }).catch((e)=>{
        res.status(500).send()
    })
})


app.get('/users/:id',(req,res)=>{
    const _id = req.params.id
    User.findById(_id).then((user)=>{
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }).catch((e)=>{
        res.status(500).send()
    })
})


app.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    
        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

app.delete('/users/:id',async(req,res)=>{
    try{
        const user =await User.findByIdAndDelete(req.param.id)
        if(!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch(e){
        res.status(500).send()
    }
})

// running   node src/index.js

app.listen(3000,()=>{
    console.log('server is up on port 3000');
})