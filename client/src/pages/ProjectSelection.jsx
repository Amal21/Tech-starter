import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProjectSelection() {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get("http://localhost:3001/projects", {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("Projects:", response.data);
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects", error);
      }
    };

    fetchProjects();
  }, []);

  const handleProjectSelect = (project) => {
    localStorage.setItem("selectedProject", project.name);
    localStorage.setItem("currentStep", "tech-stack");
    navigate("/tech-stack");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl mb-6">Select your project</h1>
      <div className="flex">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => handleProjectSelect(project)}
            className="btn-primary m-2"
          >
            {project.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProjectSelection;
