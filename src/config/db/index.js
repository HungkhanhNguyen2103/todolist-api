const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/todolist_product',{
            useNewUrlParser : true,
        });
        console.log('Connect success!');
    } catch(err){
        console.log('Connect fail!');
    }
}

module.exports = { connect }