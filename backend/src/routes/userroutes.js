import { Router } from "express";
import{registerNGO,loginNGO, registerrestaurant, loginrestaurant,} from "../controllers/usercontroller.js"

const router =Router();
router.route("/ngoregister").post(registerNGO);
router.route("/loginNGO").post(loginNGO);
router.route("/restaurantsignup").post(registerrestaurant);
router.route("/restaurantlogin").post(loginrestaurant);

export default router;