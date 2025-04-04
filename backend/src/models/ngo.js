import mongoose from "mongoose";


const ngoSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },

    description:{
        type :String,
        required:true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    ngoName: {
        type: String,
        required: true
    },
    ngoRegistrationNumber: {
        type: String,
        required: true
    },
    ngoAddress: {
        type: String,
        required: true
    }
});



const NGO = mongoose.model("NGO", ngoSchema);
export {NGO};
