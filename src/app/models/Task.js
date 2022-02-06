const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Task = new Schema({
  taskname: String,
  level:  String,
});

module.exports = mongoose.model('Task',Task , 'task' /*collect name */)