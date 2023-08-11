const mysql2 = require('../../config/db/mySQLConnection');

class AccountController {
    async signup(req, res, next) {
        const { username, email, password, confirmPassword } = req.body;
    
        // Kiểm tra xem mật khẩu và xác nhận mật khẩu có trùng khớp hay không
        if (password !== confirmPassword) {
            res.send('Mật khẩu và xác nhận mật khẩu không trùng khớp');
            return;
        }
    
        // Kiểm tra xem tên người dùng đã được sử dụng hay chưa
        try {
            const result = await new Promise((resolve, reject) => {
                mysql2.query('SELECT username FROM users WHERE username = ?', [username], (err, result) => {
                    if (err) reject(err);
                    resolve(result);
                });
            });
    
            if (result.length > 0) {
                // Tên người dùng đã được sử dụng
                res.send('Tên người dùng đã được sử dụng');
            } else {
                // Lưu thông tin người dùng vào cơ sở dữ liệu
                await new Promise((resolve, reject) => {
                    mysql2.query(
                        'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
                        [username, email, password],
                        (err, result) => {
                            if (err) reject(err);
                            resolve(result);
                        }
                    );
                });
    
                res.send('Đăng ký thành công');
            }
        } catch (err) {
            throw err;
        }
    }

    async json(req, res, next) {
        // Thực hiện truy vấn SELECT để lấy dữ liệu từ bảng users
        connection.query('SELECT * FROM users', (err, result) => {
            if (err) throw err;
    
            // Chuyển đổi kết quả truy vấn thành chuỗi JSON
            const jsonResult = JSON.stringify(result);
    
            // Gửi chuỗi JSON về cho client
            res.send(jsonResult);
        });
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
