const mongoose = require('mongoose');

const dbConnection = () => {
    const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://Pavan:QACyEK5kAWkhxDkO@cluster0.uqhnz.mongodb.net/RESTAURANT2?retryWrites=true&w=majority";
    
    console.log("Attempting to connect to MongoDB...");
    
    // Set strictQuery to false to prepare for Mongoose 7
    mongoose.set('strictQuery', false);
    
    mongoose.connect(MONGO_URI, {
        dbName: "RESTAURANT2"
    }).then(() => {
        console.log("✅ Connected to database successfully!");
        console.log(`✅ Connected to database: ${mongoose.connection.db.databaseName}`);
    }).catch(err => {
        console.log(`❌ Error connecting to database: ${err}`);
    });
};

module.exports = dbConnection;
