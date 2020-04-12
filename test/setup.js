process.env.NODE_ENV = 'test';
const conn = require('../db/index.js');

before(async () => {
    await conn.connect();
});

after(async () => {
    await conn.close();
});