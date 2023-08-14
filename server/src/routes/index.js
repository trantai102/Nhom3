

const bookRouter = require("./book")
const accountRouter = require("./account")

function route(app){

    app.use('/account', accountRouter);
    app.use('/book', bookRouter);


}

module.exports= route;