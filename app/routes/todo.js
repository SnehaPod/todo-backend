// module.exports = (app) => {
//     app.post('/', require(__base + '/app/controllers/todo').addTodo)
//     app.put('/', require(__base + '/app/controllers/todo').editTodo)
//     app.get('/', require(__base + '/app/controllers/todo').getTodos)
// }
var todo = require('../controllers/todo');

module.exports = function(app){
    app.use('/todo',function(req,res,next){
        next();
    })

    app.use('/todo',todo)
}