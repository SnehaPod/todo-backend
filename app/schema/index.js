module.exports.schemaFunc = (app, mongoose) => {
    require('./Todo')(app, mongoose)
}