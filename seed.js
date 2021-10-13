const db = require('./src/api/database/connect');

// colocar query do MongoDB
db.users.insertOne({ name: 'admin', email: 'root@email.com', password: 'admin', role: 'admin' });