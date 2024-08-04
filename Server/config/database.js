const { createPool } = require("mysql");

const pool=createPool({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "Kirtiraj#123",
    database: "project",
})

module.exports = pool;