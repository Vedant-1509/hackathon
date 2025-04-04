import httpStatus from "http-status";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { NGO } from "../models/ngo.js";
import { restaurant } from "../models/restaurant.js";


const registerNGO = async (req, res) => {
    const { fullName, email, phone, password, ngoName, ngoRegistrationNumber, ngoAddress, ngoType, foodTypesNeeded, preferredPickupHours } = req.body;

    try {
        const existingNGO = await NGO.findOne({ email });
        if (existingNGO) {
            return res.status(httpStatus.FOUND).json({ message: "NGO already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newNGO = new NGO({
            fullName,
            email,
            phone,
            password: hashedPassword,
            ngoName,
            ngoRegistrationNumber,
            ngoAddress,
            ngoType,
            foodTypesNeeded,
            preferredPickupHours
        });

        await newNGO.save();

        res.status(httpStatus.CREATED).json({ message: "NGO registered successfully" });

    } catch (error) {
        res.json({ message: `Something went wrong: ${error}` });
    }
};

// NGO Login
const loginNGO = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(httpStatus.BAD_REQUEST).json({ message: "Please enter both email and password" });
    }

    try {
        const ngo = await NGO.findOne({ email });
        if (!ngo) {
            return res.status(httpStatus.NOT_FOUND).json({ message: "NGO not found" });
        }

        let isPasswordCorrect = await bcrypt.compare(password, ngo.password);

        if (isPasswordCorrect) {
            let token = crypto.randomBytes(20).toString("hex");
            ngo.token = token;
            await ngo.save();
            return res.status(httpStatus.OK).json({ message: "Login successful", token });
        } else {
            return res.status(httpStatus.UNAUTHORIZED).json({ message: "Invalid email or password" });
        }

    } catch (error) {
        return res.status(500).json({ message: `Something went wrong: ${error}` });
    }
};

// restaurant/Grocery Registration
const registerrestaurant = async (req, res) => {
    const { fullName, email, phone, password, businessName, businessRegistrationNumber, businessAddress, foodTypesAvailable, preferredDonationHours } = req.body;

    try {
        const existingBusiness = await restaurant.findOne({ email });
        if (existingBusiness) {
            return res.status(httpStatus.FOUND).json({ message: "Business already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newrestaurant = new restaurant({
            fullName,
            email,
            phone,
            password: hashedPassword,
            businessName,
            businessRegistrationNumber,
            businessAddress,
            foodTypesAvailable,
            preferredDonationHours
        });

        await newrestaurant.save();

        res.status(httpStatus.CREATED).json({ message: "Business registered successfully" });

    } catch (error) {
        res.json({ message: `Something went wrong: ${error}` });
    }
};

// restaurant/Grocery Login
const loginrestaurant = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(httpStatus.BAD_REQUEST).json({ message: "Please enter both email and password" });
    }

    try {
        const restaurant = await restaurant.findOne({ email });
        if (!restaurant) {
            return res.status(httpStatus.NOT_FOUND).json({ message: "Business not found" });
        }

        let isPasswordCorrect = await bcrypt.compare(password, restaurant.password);

        if (isPasswordCorrect) {
            let token = crypto.randomBytes(20).toString("hex");
            restaurant.token = token;
            await restaurant.save();
            return res.status(httpStatus.OK).json({ message: "Login successful", token });
        } else {
            return res.status(httpStatus.UNAUTHORIZED).json({ message: "Invalid email or password" });
        }

    } catch (error) {
        return res.status(500).json({ message: `Something went wrong: ${error}` });
    }
};


export {
    registerNGO,
    loginNGO,
    registerrestaurant,
    loginrestaurant,
//     getNGOHistory,
//     getrestaurantHistory,
//     addToHistory
};
