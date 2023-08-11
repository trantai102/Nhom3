const express = require('express');
const port = 3000;
const app = express();
const route = require('./src/routes')


app.get('/', (req, res) => {
    console.log("call API succes");
    res.send('Hello word!');

})

app.listen(port, () => {
    console.log(`Application listenning on port ${port}`);
})