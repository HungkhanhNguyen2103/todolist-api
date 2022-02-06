const express = require('express')
const router = express.Router()

const itemController = require('../app/controllers/ItemController')


//add
router.post('/create' , itemController.create)
//delete
router.delete('/delete/:id' ,itemController.delete)
//edit
router.put('/edit/:id',itemController.edit)
//get
router.get('/',itemController.index)

module.exports = router