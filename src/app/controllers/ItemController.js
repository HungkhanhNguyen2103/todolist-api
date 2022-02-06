const Task = require("../models/Task");

class ItemController{
    // [GET] /
    
    index ( req , res){
        Task.find({},function (err, task){
            if(!err) res.json(task)
        })
    }

    // [POST]
    
    create ( req , res){
        // res.json(req.body)
        res.send('Create')
        const task = new Task(req.body)
        task.save()
    }

    //[DELETE]

    delete (req, res ,next){
        res.send('Delete')
        Task.deleteOne({_id : req.params.id})
        .then(() => res.redirect('back'))
        .catch(next)
    }

    //[PUT]
    edit(req, res, next){
        res.send('Edit')
        Task.updateOne({_id : req.params.id},req.body)
        .then(() => res.redirect('back'))
        .catch(next)
    }

}

module.exports = new ItemController;