const express = require('express');
const router = express.Router();
const auth = require('../midleware/checkAuth');
// const multer = require('multer');
const ItemController=require('../controls/item');

// const storage =multer.diskStorage({
//     destination: function(req, file, cb){
//         cb(null, 'uploads/');
//     },
//     filename: function(req, file, cb){
//     cb(null, Date.now()  + file.originalname);
//     }
// });

// const fileFilter = (req, file, cb) =>{
//     //reject a file
//     if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
//      cb(null, true);
//     } else{
//         cb(null,false);
//     }
// };

// const upload = multer({
//     storage: storage, 
//     limits: {
//     fileSize:1024 * 1024 * 5
//     },
//     fileFilter: fileFilter
// });

router.get('/', ItemController.item_get_all);

//  router.post('/' , auth , upload.single('itemImage') ,ItemController.item_create_item);

 router.post('/' ,auth, ItemController.item_create_item);

router.get('/:id', ItemController.item_get_item);

router.patch('/:id',auth, ItemController.item_update_item);

router.delete('/:id',auth, ItemController.item_delete_item);

module.exports = router;