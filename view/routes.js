import express from "express";
import { getAllEmp, addEmp, updateEmp, deleteEmp} from "../controller/userController.js";

const router = express.Router();

router.get("/Employee",getAllEmp);
router.post("/Employee",addEmp);
router.put("/Employee/:empId",updateEmp);
router.delete("/Employee/:empId",deleteEmp);

export default router;