require('dotenv').config(); // Load environment variables
const mongoose = require('mongoose');

function DbConnect() {
    const DB_URL = 'mongodb+srv://shivamdotsingh:1QmSuP13qzu9GSO9@cluster0.0xjhv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

    if (!DB_URL) {
        console.error('Error: DB_URL is not defined.');
        return;
    }

    // Database connection
    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log('DB connected...');
    });
}

module.exports = DbConnect;
