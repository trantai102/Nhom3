const mysql2 = require('../../config/db/mySQLConnection');

class AccountController {
    async signup(req, res, next) {
    
    }

    async signin(req,res) {
    const { name, password } = req.body;
    const query = `SELECT * FROM users WHERE username = '${name}' AND password = '${password}';`;
    mysql2.query(query, (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Lỗi truy vấn cơ sở dữ liệu' });
            return;
        }

        if (results.length > 0) {   
            console.log(results)
            res.status(200).json({results});    
        } else {
            res.status(401).json({ message: 'Sai thông tin đăng nhập' });
        }
    });
    }
}

module.exports = new AccountController;
