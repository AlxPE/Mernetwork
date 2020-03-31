const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mogoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log(`MongoDB Connected...`);
    } catch (err) {
        console.log(`Error connecting to DB: ${err.message}`);
        // Exit the process with failure
        process.exit(1);
    }
}

module.exports = connectDB;