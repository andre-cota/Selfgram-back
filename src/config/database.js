// "Loga" na DB

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'dymista',
  password: '123456',
  database: 'selfgram',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
