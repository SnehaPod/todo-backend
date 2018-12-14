// module.exports.addTodo = (req, res) => {
//     req.app.db.models.Todos.create(req.body).then(todo => {
//         res.status(200).json(todo)
//     })
//     .catch(err => {
//         res.status(500).json(err)
//     })
// }

// module.exports.editTodo = (req, res) => {
//     req.app.db.models.Todos.findOneAndUpdate({_id: req.body._id}, {$set: req.body}, {new: true}).then(todo => {
//         res.status(200).json(todo)
//     })
//     .catch(err => {
//         res.status(500).json(err)
//     })
// }

// module.exports.getTodos = (req, res) => {
//     req.app.db.models.Todos.find({}).then(todos => {
//        res.status(200).json(todos)
//     })
//     .catch(err => {
//         res.status(500).json(err)
//     })
// }

// module.exports.deleteTodo = (req, res) => {
//     req.app.db.models.Todos.remove({_id: req.body._id}).then(todo => {
//         res.status(200).json(todo)
//     })
//     .catch(err => {
//         res.status(500).json(err)
//     })
// }

const express = require('express');
const router = express.Router()

var sql = ""
router.post('/', (req, res) => {
    console.log('req.body,req.query :', req.body);
    sql = `INSERT INTO todo.list (title) VALUES ('${req.body.title}')`;
    req.app.con.query(sql, (err, result) => {
        if(err) throw err
        else{
            res.json({data:result})
        }
    })
})

router.get('/', (req, res) => {
    sql = `SELECT * FROM todo.list`;
    req.app.con.query(sql, (err, result) => {
        if(err) throw err
        else{
            res.json({data:result})
        }
    })
})

router.put('/', (req, res) => {
    sql = `UPDATE todo.list SET title = '${req.body.title}' WHERE id = ${req.body.id}`;
    req.app.con.query(sql, (err, result) => {
        if(err) throw err
        else{
            res.json({data:result})
        }
    })
})

router.delete('/', (req, res) => {
    console.log('req.body :', req.body);
    sql = `DELETE FROM todo.list WHERE id = ${req.body.id}`;
    req.app.con.query(sql, (err, result) => {
        if(err) throw err
        else{
            res.json({data:result})
        }
    })
})

module.exports = router