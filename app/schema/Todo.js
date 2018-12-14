module.exports = (app, mongoose) => {
    var todoSchema = new mongoose.Schema({
        title: {type: String, required: true},
        // type: {type: String, required: true}
    })

    app.db.model('Todos', todoSchema)
}