import mongoose from 'mongoose';

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
  },

  phoneNumber: {
    type: String,
    required: true,
    trim: true,
  },

  restaurantName: {
    type: String,
    required: true,
    trim: true,
  },

  address: {
    type: String,
    required: true,
    trim: true,
  },

  city: {
    type: String,
    required: true,
    trim: true,
  },

  pincode: {
    type: String,
    required: true,
    trim: true,
  },

  fssaiLicenseNumber: {
    type: String,
    default: null,
    trim: true,
  },

  foodType: {
    type: String,
    enum: ['veg', 'non-veg', 'both'],
    default: 'both',
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const restaurant=mongoose.model("Restaurant",restaurantSchema)
export{restaurant}