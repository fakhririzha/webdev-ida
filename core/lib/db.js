const mongoose = require('mongoose');

const MongoDBConnection = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI);

        console.log(`MongoDB Connected: ${db.connection.host}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

module.exports = MongoDBConnection;
