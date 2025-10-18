import express from "express";
import { sendVerificationCode } from "../controllers/verifyController.js";
const router = express.Router();

router.post("/send", sendVerificationCode);

export default router;
