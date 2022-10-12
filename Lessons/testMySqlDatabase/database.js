const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'testdbnew',
});

connection.connect();

connection.query(`Select * FROM tasks`, (error, results, fields) => {
    if (error) {
        return console.log(error);
    }
    return console.log(results);
});

connection.end();