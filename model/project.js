import mongoose from "mongoose";
import { type } from "os";
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  projectName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["inprogress", "todo", "done"],
    required: true,
    default: "todo",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  progress: {
    type: Number,
    min: 0,
    max: 100,
    default: 0,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
});

const ProjectEntity = mongoose.model("projects", ProjectSchema);
export default ProjectEntity;
