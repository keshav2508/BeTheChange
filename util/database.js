const mysql = require('mysql2');
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'humanity',
  password: 'keshav@2508'
});
module.exports = pool.promise();
