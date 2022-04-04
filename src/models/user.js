const mongoose=require('mongoose')
const validator=require('validator')
// const validate=require('validate')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim:true
    },
    email:{
        type:String,
        lowercase:true,
        trim:true,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    password:{
        type:String,
        required:true,
        minlength:5,
        trim:true,
        validate(value){
            if(value.toLowerCase().includes('password')) {
                throw new Error('password cannot contain "password"')
            }
        }
    },
    
    age: {
        type: Number,
        default:0,
        validate(value) {
            if(value<0){
                throw new Error('Age must be a Positive Number')
            }
        }
    }
})

// const me = new User({
    // name: "Swathi",
    // password:"yamini",
    // email: "sawthi@gmail.com",
    // age: 25,

// })


module.exports=User