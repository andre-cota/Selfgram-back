//"Loga" na DB

module.exports = {
    dialect: 'mssql',
    host: 'localhost',
    username:'dymista',
    password:'123456',
    database:'selfgram',
    define: {
        timestamp:false,
        createdAt: false,
        updatedAt: false
    }
};