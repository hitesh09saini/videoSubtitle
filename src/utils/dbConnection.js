import mongoose from "mongoose";
const URL = process.env.MONGO_URL;
const DBConnection = () => {
    try {
        const conn = mongoose.connect(URL);
        console.log('MongoDB is connected successfully ' + mongoose.connection.host);
    } catch (error) {
        console.log("MongoDB Connection Error:" + error);
    }
}


export default DBConnection