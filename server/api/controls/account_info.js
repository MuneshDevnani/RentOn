const Account = require('../models/account_info');
const User =require('../models/user');

exports.account_create_accountDetails = async(req, res, next) =>{
    try {
        const { id } = req.decoded;
        const user = await User.findById(id);
        if(!user) throw new Error('Unauthorize access')

        const { firstName,
                lastName,
                email,
                dateOfBirth,
                phone,
                address }= req.body;
        const account= await Account.create({
            user,
            firstName,
            lastName,
            email,
            dateOfBirth,
            phone,
            address
        });
        user.accountInfo.push(account._id);
        await user.save();

        res.status(201).json({ 
                message:'Created Account Details successfully',
                state:true,
                AccountDetails:{
                ...account._doc, 
                user: user._id 
                }
            });
    } catch (err) {
        err.status= 400;
        next(err);
    }
}

exports.account_get_accountDetails = async (req, res, next) =>{
    try {
        const { id } = req.decoded;
        const user = await User.findById(id)
        .populate('accountInfo',[
            'firstName',
            'lastName',
            'email',
            'dateOfBirth',
            'phone',
            'address'
        ])
        .populate('item', ['title',
        'RentPrice',
         'itemImage']);
        if(!user) throw new Error('Unauthorize access')

        res.status(200).json(user);
    } catch (err) {
        err.status = 400;
        next(err);
    }
}


// exports.account_get_accountDetails = async (req, res, next) =>{
//     try {
//         const { id } = req.params;

//         const account = await Account.findById(id)
//         .populate('user', [
//             'email',
//             'id'
//         ]);
//         if(!account) throw new Error('No account details found');

//         res.status(200).json(account);
//     } catch (err) {
//         err.status = 400;
//         next(err);
//     }
// }
