const sql2 = require('../../config/db/mySQLConnection');

class QueryBookController {
    async queryBook(req, res){
        // Truy vấn dữ liệu từ bảng book
        sql2.query('SELECT * FROM books', function (error, results, fields) {
            if (error) throw error;
            res.send(results);
            console.log(results);
        });
    }
}
module.exports = new QueryBookController;