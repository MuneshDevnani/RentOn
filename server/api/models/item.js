const mongoose= require('mongoose');

const itemSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user'
    },
    title: {
        type:String, 
        required: true
    },
    RentPrice: {
        type: Number, 
        required :true
    },
    desc: {
        type:String, 
        required: true
    },
    category:{
        type:String, 
        required: true
    },
    itemImage: {
        type: String, 
        required: true
    }
});

module.exports = mongoose.model('item', itemSchema);