import { createAdmin, createAlumni,createStudent ,getAllUsers} from "../controllers/userrController.js";
import { createCompany, getCompanies } from "../controllers/Companycontroller.js";
import {createReview,getAllReviews} from "../controllers/reviewcontroller.js"
import {  likeReviews} from "../controllers/Likescontoller.js";

import express from "express";
import { isAdmin } from "../middleware/Middleware.js";
const router = express.Router()

router.post("/admin/create",createAdmin)
router.post("/alumni/create",createAlumni)
router.post("/student/create",createStudent)
router.post("/company/create",isAdmin,createCompany)
router.post("/review/create",createReview)
router.post("/likes/add",likeReviews)

router.get("/user/get",getAllUsers)
router.get("/company/get",getCompanies)

export default router