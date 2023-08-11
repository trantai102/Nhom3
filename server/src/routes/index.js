
// const siteRouter = require("./site");
// const meRouter = require("./me");
// const productRouter = require("./product")
const accountRouter = require("./account")

function route(app){

    app.use('/account', accountRouter);
    // app.use('/me', meRouter);
    // app.use('/product', productRouter);
    // app.use('/', siteRouter);

}

module.exports= route;