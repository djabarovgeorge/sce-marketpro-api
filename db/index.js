const mongoose = require('mongoose');
const DB_URI = 'mongodb://localhost:27017/SceMarketPro';

function connect() {
  return new Promise((resolve, reject) => {
    if (process.env.NODE_ENV === 'test'){
      mongoose
        .connect(`${DB_URI}`+"test", {
          useNewUrlParser: true,
          useCreateIndex: true,
          useUnifiedTopology: true,
        })
        .then(resolve).catch(reject);
    }
    else {
      mongoose
        .connect(DB_URI, {
          useNewUrlParser: true,
          useCreateIndex: true,
          useUnifiedTopology: true,
        })
        .then(resolve).catch(reject);
    }
  });
}

function close() {
  if (process.env.NODE_ENV === 'test'){
    mongoose.connection.db.dropDatabase();
  }
  return mongoose.disconnect();
}

module.exports = { connect, close };
