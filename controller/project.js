import ProjectEntity from "../model/project.js";

export const getProject = async (req, res) => {
  try {
    const projects = await ProjectEntity.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (err) {
    console.error(error);
    res.status(500).json({ message: "Error fetching projects" });
  }
};

export const createProject = async (req, res) => {
  try {
    const newProject = new ProjectEntity({
      projectName: req.body.projectName,
      description: req.body.description,
    });
    newProject.save();
    res.status(200).json(newProject);
  } catch (err) {
    console.error(error);
    res.status(500).json({ message: "Error creating Project" });
  }
};

export const getProjectByStatus = async (req, res) => {
  try {
    const { status } = req.params;
    if (!status) {
      return res.status(400).json({ message: "Status is required" });
    }
    const projects = await ProjectEntity.find({ status });
    res.json(projects);
  } catch (err) {
    console.error(error);
    res.status(500).json({ message: "Error fetching projects" });
  }
};

export const updateProject = async (req, res) => {
  const { id } = req.params;
  const { status, progress } = req.body;

  if (status && !["inprogress", "todo", "done"].includes(status)) {
    return res.status(400).json({ error: "Invalid status value" });
  }

  if (progress !== undefined && isNaN(progress)) {
    return res.status(400).json({ error: "Progress must be a number" });
  }

  try {
    const updateFields = {};
    if (status) updateFields.status = status;
    if (progress !== undefined) updateFields.progress = progress;

    const updatedProject = await ProjectEntity.findByIdAndUpdate(
      id,
      updateFields,
      { new: true }
    );

    if (!updatedProject) {
      return res.status(404).json({ error: "Project not found" });
    }

    res.status(200).json(updatedProject);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await ProjectEntity.findByIdAndDelete(id);

    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    res
      .status(200)
      .json({ success: `Project with id: ${id} deleted succesfully` });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
