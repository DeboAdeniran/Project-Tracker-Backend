import express from "express";
import {
  getProject,
  createProject,
  getProjectByStatus,
  updateProject,
  deleteProject,
} from "../../controller/project.js";

const router = express.Router();

router.get("/", getProject);
router.get("/status/:status", getProjectByStatus);
router.post("/", createProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

export default router;
