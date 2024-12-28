const mongoose = require('mongoose');

function DbConnect() {
    const DB_URL = process.env.DB_URL;

    // Optional: Enable strict query behavior for compatibility
    mongoose.set('strictQuery', true);

    // Database connection
    mongoose.connect(DB_URL)
        .then(() => {
            console.log('DB connected...');
        })
        .catch(err => {
            console.error('Database connection error:', err);
        });
}

module.exports = DbConnect;
