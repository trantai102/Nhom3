const express = require('express');
const port = 3001;
const app = express();
const route = require('./src/routes')
const mysql2 = require('./src/config/db/mySQLConnection');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// nếu gặp lỗi do bảo mật CORS thì mở ra
const cors = require('cors');app.use(cors());

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