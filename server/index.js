const express = require('express');
const port = 3000;
const app = express();
const route = require('./src/routes')
const mysql2 = require('./src/config/db/mySQLConnection');

// Kết nối tới cơ sở dữ liệu
mysql2.connect((err) => {
    if (err) {
        console.error("Lỗi kết nối:", err);
    } else {
        console.log("Kết nối thành công đến MySQL");
    }
});


app.get('/', (req, res) => {
    console.log("call API succes");
    res.send('Hello word!');

})

route(app);

app.listen(port, () => {
    console.log(`Application listenning on port ${port}`);
})