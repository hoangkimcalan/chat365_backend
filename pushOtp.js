import mongoose from 'mongoose'
import DataFirebaseOTP from "./models/DataFirebaseOTP.js";
import fs from 'fs';
const path = 'OTP/vieclam88.json';
const connect = async() => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/api-base365", { serverSelectionTimeoutMS: 10000 });
        // await mongoose.connect("mongodb://localhost:27017/api-base365");
        console.log("Connected to mongoDB.");
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", (error) => {
    console.error("MongoDB disconnected with error:", error);
});
mongoose.connection.on('error', function() {
    console.log("Lỗi try vấn")
});


fs.readFile(path, 'utf8', async(err, data) => {
    await connect();
    console.log(data);
    let data1 = JSON.parse(data);
    for (let i = 0; i < data1.length; i++) {
        let config = data1[i];
        let newconfig = new DataFirebaseOTP({
            email: config.email,
            code: config.code,
            for: "vetinh",
            data: {
                apiKey: config.apiKey,
                authDomain: config.authDomain,
                projectId: config.projectId,
                storageBucket: config.storageBucket,
                messagingSenderId: config.messagingSenderId,
                appId: config.appId,
                measurementId: config.measurementId
            }
        });
        // console.log(newconfig);
        await DataFirebaseOTP.deleteOne({
            code: config.code
        });
        await newconfig.save();
        let check = await DataFirebaseOTP.findOne({
            code: config.code
        });
        console.log("Lưu thành công", check);
    }
})