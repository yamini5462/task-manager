//CRUD Operations

// const mongodb=require("mongodb")
// const MongoClient=mongodb.MongoClient
// const ObjectID =mongodb.ObjectID

    //Destructing 
const {MongoClient,ObjectID} =require('mongodb')
           //Connection MongoDb
const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-manager'

// const id=new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL,{useNewUrlParser:true},(error, client)=>{
        if(error){
           return console.log('unable to connect to database')
        }
                             // Creating One Collection
        const db =client.db(databaseName)
        // db.collection('users').insertOne({
        //     _id:id,
        //     name:'jaswanth',
        //     age:25
        // },(error,result)=>{
        //     if(error){
        //         return console.log('unable to insert user')
        //     }
        //     console.log(result)
        // })

                           // Creating Many collections
        // db.collection('users').insertMany([
        // {
        //     name:'sri',
        //     age:10
        // },{
        //      name:'mugdha',
        //      age:9
        // }],(error,result)=>{
        //     if(error){
        //         console.log('unable to insert documents')
        //     } 
        //     console.log(result)
        // })

        // db.collection('tasks').insertMany([
        //     {
        //        description :'clean the house',
        //        completed:true
        //     },{
        //         description :'Renew inspection',
        //         completed:false
        //     },
        //      {
        //         description :'pot plants',
        //         completed:false
        //      }],(error,result)=>{
        //         if(error){
        //             console.log('unable to insert tasks')
        //         } 
        //         console.log(result)
        //     })


        //  Find collection featch Method findOne() with name
        // db.collection('users').findOne({name :'jaswanth' },(error,user)=>{
        //     if(error){
        //         return console.log('unable to featch')
        //     }
        //     console.log(user)
            
            
        // })

         //  Find collection featch Method findOne() with id
        //  db.collection('users').findOne({_id:new ObjectID("6243f340efba02ee3e70549d") },(error,user)=>{
        //     if(error){
        //         return console.log('unable to featch')
        //     }
        //     console.log(user)
            
            
        // })
                       //How to find No of Users names in one document 
        // db.collection('users').find({name:'yamini' }).toArray((error,users)=>{
        //     console.log(users)
        // })
              
        // db.collection('users').updateOne({
        //     _id:new ObjectID("6243e5c2175b996c9c4fc3a1")
        // },{
        //     $set :{
        //         name : "kalyani"
        //     },
        // }).then((result)=>{
        //     console.log(result)
        // }).catch((error)=>{
        //     console.log(error)
        // })


        db.collection('users').deleteOne({
           _id:new ObjectID("6243e5497538bf27cc106b43")
        }).then((result)=>{
            console.log(result)
        }).catch((error)=>{
            console.log(error)
        })
})