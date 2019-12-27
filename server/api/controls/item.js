const Item = require('../models/item');
const User =require('../models/user');

exports.item_get_all= async(req, res, next) => {
    try{
        const item = await Item.find()
        .populate('user', ['email', 'id']);

        res.status(200).json(item);
    } catch(err){
        err.status = 400;
        next(err);
    }
};

exports.item_create_item = async(req, res, next) =>{
    console.log(req.body)
    try {
        const { id } = req.decoded;
        const user = await User.findById(id);
        console.log(user);
        
        if(!user) throw new Error('Unauthorize access')

        const { title,
                RentPrice,
                desc,
                category,
                itemImage }= req.body;
        const item= await Item.create({
                user,
                title,
                RentPrice,
                desc,
                category,
                itemImage
        });
        user.item.push(item._id);
        await user.save();

        res.status(201).json({ 
                message:'Created Item successfully',
                state:true,
                Item:{
                ...Item._doc, 
                user: user._id 
                }
            });
    } catch (err) {
        err.status= 400;
        next(err);
    }
}

exports.item_get_item = async (req, res, next) =>{
    try {
        const { id } = req.params;

        const item = await Item.findById(id)
        .populate({
            path    : 'user',
            populate: [
                { 
                   path    : 'accountInfo',
                }
            ]
       });
        if(!item) throw new Error('No Item found');

        res.status(200).json(item);
    } catch (err) {
        err.status = 400;
        next(err);
    }
}

exports.item_update_item = async (req, res, next) => {
    try {
        const { id: itemId } = req.params;
        const { id: userId } = req.decoded;
        const updateOps ={};
       for(const ops of req.body){
        updateOps[ops.propName]= ops.value;
        }
        const item = await Item.findById(itemId);
        if(!item) throw new Error('No Item found');
        if(item.user.toString() !== userId){
            throw new Error('Unauthorize access');
        }

        await Item.updateOne({ _id: itemId, user: userId}, {$set: updateOps})
        res.status(200).json({
        message:"Item updated",
        });
    } catch (err) {
        err.status = 400;
        next(err);
    }
}

  exports.item_delete_item = async (req, res, next) => {
    try {
        const { id: itemId } = req.params;
        const { id: userId } = req.decoded;

        const item = await Item.findById(itemId);
        if(!item) throw new Error('No Item found');
        if(item.user.toString() !== userId){
            throw new Error('Unauthorize access');
        }
        await item.remove();
        res.status(202).json(item);
    } catch (err) {
        err.status = 400;
        next(err);
    }
}