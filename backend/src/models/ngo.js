import mongoose from "mongoose";


const ngoSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
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
    },
    ngoType: {
        type: String,
        enum: ["Orphanage", "Shelter", "Food Distribution", "Other"],
        required: true
    },
    ngoWebsite: {
        type: String,
        required: false
    },
    foodTypesNeeded: {
        type: [String], // Example: ["Fresh", "Cooked", "Packaged"]
        required: true
    },
    preferredPickupHours: {
        type: String,
        required: true
    },
    preferredPickupLocation: {
        type: String,
        required: false
    },
    verificationDocument: {
        type: String, // File path or URL of the uploaded document
        required: true
    },
    additionalDocument: {
        type: String, // Optional additional verification file
        required: false
    },
    isVerified: {
        type: Boolean,
        default: false // Admin can verify NGOs
    },
    emailVerified: {
        type: Boolean,
        default: false
    },
    phoneVerified: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});



const NGO = mongoose.model("NGO", ngoSchema);
export {NGO};
