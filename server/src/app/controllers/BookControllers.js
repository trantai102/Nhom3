const sql = require("../../config/db/mySQLConnection");

class BookControllers {
  // API book/create
  async create(req, res) {
    // Thực hiện hành động thêm sách vào thư viện
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS books (
            id INT AUTO_INCREMENT PRIMARY KEY, 
            title VARCHAR(255) NOT NULL,
            author VARCHAR(255) NOT NULL,
            publication_year INT,
            publisher VARCHAR(255),
            category VARCHAR(100),
            description TEXT,
            cover_image VARCHAR(255),
            quantity INT,
            location VARCHAR(100),
            status ENUM('available', 'borrowed', 'out_of_stock') DEFAULT 'available',
            price DECIMAL(10, 2),
            source VARCHAR(255),
            language VARCHAR(50),
            date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            date_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        );        
        `;
    const insertDataQuery = `
        INSERT INTO books (title, author, publication_year, 
            publisher, category, description, cover_image,
            quantity, location, status, price, source,language) VALUES
            (?, ?, ?, ?, ?,?,?, ?, ?, ?, ?,?, ? );
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
        author,
        publication_year,
        publisher,
        category,
        description,
        cover_image,
        quantity,
        location,
        status,
        price,
        source,
        language,
      } = bookData;
      sql.query(createTableQuery, (e, r) => {
        if (!e) {
          // nếu tạo bảng thành công hoặc bảng đã có sẵn thì tạo sản phẩm
          sql.query(
            insertDataQuery,
            [
              title,
              author,
              publication_year,
              publisher,
              category,
              description,
              cover_image,
              quantity,
              location,
              status,
              price,
              source,
              language,
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
}

module.exports = new BookControllers();
