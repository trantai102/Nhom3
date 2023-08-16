
const queryBookRouter = require("./queryBook")
const bookRouter = require("./book")
const accountRouter = require("./account")

function route(app){

    app.use('/queryBook', queryBookRouter);
    app.use('/account', accountRouter);
    app.use('/book', bookRouter);


}

module.exports= route;