const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user'
    },
    firstName: {
        type:String, 
        required: true
    },
    lastName: {
        type:String, 
        required: true
    },
    email: {
        type:String, 
        required: true,
        unique: true
    },
    dateOfBirth: { 
        type: Date , 
        required :true
    },
    phone: { 
        type: Number , 
        required :true,
        unique:true
    },
    address: {
        type: String , 
        required :true
    }
});

module.exports = mongoose.model('account', accountSchema);