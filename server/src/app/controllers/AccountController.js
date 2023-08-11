const mysql2 = require('../../config/db/mySQLConnection');

class AccountController {
    async signup(req, res, next) {
    
    }

    async signin() {
        const { identifier, password } = req.body;
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    db.query(query, [identifier, password], (err, results) => {
        if (err) {
            return("Lỗi truy vấn cơ sở dữ liệu");
        }

        if (results.length > 0) {
            // thành công trả về dữ liệu người dùng.
            return(results);            
        } else {
            return("sai thông tin đăng nhập");            
        }
    });
    }
}

module.exports = new AccountController;
