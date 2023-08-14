const sql = require("../../config/db/mySQLConnection");

class BookControllers {
  // API book/create
  async create(req, res) {
    // Thực hiện hành động thêm sách vào thư viện
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS Books (
        book_id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        author_id INT NOT NULL,
        publication_year INT,
        genre VARCHAR(100),
        quantity INT,
        location VARCHAR(100),
        description TEXT,
        status ENUM('available', 'borrowed', 'out_of_stock') DEFAULT 'available',
        date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        date_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      );    
      `;
    const insertDataQuery = `
        INSERT INTO books (title, author_id, publication_year, 
            genre, quantity, location,
            description, status) VALUES
            (?, ?, ?, ?, ?, ?, ?, ? );
        `;
    const bookData = req.body;

    var isConnect = true;
    sql.connect((err) => {
      if (err) {
        isConnect = false;
        console.log(err);
        return;
      } else {
        isConnect = true;
      }
    });

    if (isConnect && bookData) {
      const {
        title,
        author_id,
        publication_year,
        genre,
        quantity,
        location,
        description,
        status,
      } = bookData;
      sql.query(createTableQuery, (e, r) => {
        if (!e) {
          // nếu tạo bảng thành công hoặc bảng đã có sẵn thì tạo sản phẩm
          sql.query(
            insertDataQuery,
            [
              title,
              author_id,
              publication_year,
              genre,
              quantity,
              location,
              description,
              status,
            ],
            (e, r) => {
              if (e) {
                console.log(e);
                return res.status(500).json("error");
              }
              console.log("succes");
              return res.status(200).json("done");
            }
          );
        }
      });
    }
  }

  // API book/update
  async update(req, res) {
    // API: http://localhost:3001/book/update/?{id}
    const updateDataquery = `UPDATE books SET ? WHERE book_id = ?`;
    const bookData = req.body;
    const bookId = req.params.id;

    if (!bookData) {
        return res.status(400).json("Invalid data");
    }

    sql.connect((err) => {
        if (err) {
          // check SQL
            console.log(err);
            return res.status(500).json("Database connection error");
        }

        sql.query(
            updateDataquery, [bookData, bookId],
            (e, r) => {
                if (e) {
                  // bắt lỗi gửi lên SQL
                    console.log(e);
                    return res.status(500).json("Error updating book");
                }
                console.log("Success");
                return res.status(200).json("Book updated successfully");
            }
        );
    });
}






  

  // API book/delete
  async delete(req, res) {}
}

module.exports = new BookControllers();
