const mariadb = require('mariadb')
const vals = require('./config')

const pool = mariadb.createPool({
    host : vals.host,
    port : vals.port,
    user : vals.user,
    password : vals.pass
})

module.exports = pool
