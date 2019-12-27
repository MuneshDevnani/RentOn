const mongoose= require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = Schema({
    email: {
        type:String, 
        required: true, 
        unique: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    password: { 
        type: String , 
        required :true
    } ,
    created:{
        type:Date,
        default:Date.now
    },
    accountInfo:[{ type: mongoose.Schema.Types.ObjectId, ref:'account'}],

    item:[{ type: mongoose.Schema.Types.ObjectId, ref:'item'}],

});

userSchema.pre('save', async function(next){
    try{
        if(!this.isModified('password')){
            return next();
        }
        const hashed = await bcrypt.hash(this.password, 10);
        this.password = hashed;
        return next();
    } catch (err){
        return next(err);
    }
});

userSchema.methods.comparePassword = async function(attempt, next){
    try{
        return await bcrypt.compare(attempt, this.password);
    } catch(err) {
        next(err);
    }
};

module.exports = mongoose.model('user', userSchema);