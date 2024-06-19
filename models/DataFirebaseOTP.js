import mongoose from "mongoose";
const DataFirebaseOTPSchema = new mongoose.Schema({
    email: {
        type: String,
        default: ""
    },
    code: {
        type: String,
        default: ""
    },
    data: {
        type: Object,
        default: null,
    },
    for: {
        type: String,
        default: ""
    }
}, {
    collection: 'DataFirebaseOTP',
    versionKey: false
});

export default mongoose.model("DataFirebaseOTP", DataFirebaseOTPSchema);