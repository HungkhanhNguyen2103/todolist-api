const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb+srv://hungkhanh2103:0123654798a@databaseproject.6dtro.mongodb.net/todolistproject?retryWrites=true&w=majority',{
            useNewUrlParser : true,
            useUnifiedTopology: true, 
        });
        console.log('Connect success!');
    } catch(err){
        console.log('Connect fail!');
    }
}

module.exports = { connect }