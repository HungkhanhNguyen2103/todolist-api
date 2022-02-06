const itemRouter = require('./item')
function route(app){
    app.use('/all', itemRouter)


    app.use('/item', itemRouter )


}

module.exports = route;