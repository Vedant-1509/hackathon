import { Router } from "express";
import{registerNGO,loginNGO, registerRestaurant, loginRestaurant,} from "../controllers/usercontroller.js"

const router =Router();
router.route("/ngoregister").post(registerNGO);
router.route("/loginNGO").post(loginNGO);
router.route("/restaurantsignup").post(registerRestaurant);
router.route("/restaurantlogin").post(loginRestaurant);

export default router;