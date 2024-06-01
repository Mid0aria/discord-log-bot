const mysql = require("mysql2");
const config = require("../config.json");

const db = mysql.createPool({
    host: config.db.mysql.MYSQL_HOST,
    user: config.db.mysql.MYSQL_USER,
    password: config.db.mysql.MYSQL_PWD,
    database: config.db.mysql.MYSQL_DB,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
});

module.exports = { db };
