import mongoose from 'mongoose';

mongoose.set("strictQuery", false);

const mongoDbConnection = () => {
    try {
        mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB Sucessfully');
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default mongoDbConnection;